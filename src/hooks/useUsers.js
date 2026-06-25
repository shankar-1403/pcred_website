import { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from '../lib/firebase'

export function useUsers() {
  const [usersById, setUsersById] = useState({})
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const r = ref(db, 'users')
    const unsub = onValue(
      r,
      (snap) => {
        const v = snap.val()
        const list = v
          ? Object.entries(v).map(([id, data]) => ({ id, ...data }))
          : []
        list.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0))
        setUsers(list);
        setUsersById(snap.val() ?? {})
        setError(null)
        setLoading(false)
      },
      (err) => {
        console.error(
          '[CMS] users read denied — rules must allow auth users to read /users (see database.rules.json).',
          err,
        )
        setUsers([]);
        setUsersById({})
        setError(err)
        setLoading(false)
      },
    )
    return () => unsub()
  }, [])
 

  return { users, usersById, processUsers, salesUsers, managementUsers, loading, error }
}