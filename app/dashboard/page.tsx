"use client"

import React,{useState,useMemo} from 'react'
import { db } from '@/src/lib/firebase';
import { push,ref,set } from 'firebase/database';
import { useAuth } from '@/src/context/AuthContext';
import TablePagination from '@/components/TablePagination';
import { usePagination } from '@/src/hooks/usePagination';
import { AnimatePresence,motion } from 'motion/react';
import { IconX } from '@tabler/icons-react';

function page() {

  const [loading,setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // const schemesTable = useMemo(() => statuses ?? [], [statuses])
  
  // const {
  //   page: tablePage,
  //   setPage: setTablePage,
  //   pageSize: tablePageSize,
  //   setPageSize: setTablePageSize,
  //   total: tableTotal,
  //   totalPages: tableTotalPages,
  //   pageItems: tablePageItems,
  // } = usePagination(statusesTable)
  const handleOpen = () => {
    setModalOpen(true);
  }
  async function handleCreate(e:any) {
    e.preventDefault()

    try {
      const newRef = push(ref(db, 'statuses'))
      await set(newRef, {
        createdAt: Date.now(),
      })
    } catch (err:any) {
      console.log(err?.message ?? 'Could not add status.')
    } finally {
      // c(false)
    }
  }
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 space-y-6">
        <section className='flex justify-between'>
          <div>
            <h1 className="text-2xl font-semibold text-[#084E75]">Scheme master</h1>
          </div>
          <div>
            <button onClick={handleOpen} className="text-sm font-medium bg-[#084E75] text-white py-2 px-4 rounded-xl cursor-pointer">Add Scheme</button>
          </div>
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={()=>setModalOpen(false)}
                  className="absolute inset-0 cursor-pointer bg-[#084E75]/40 backdrop-blur-sm"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 16 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-4xl bg-white shadow-2xl"
                >
                  <div className="sticky top-0 flex items-center justify-between border-b border-[#084E75]/10 bg-white px-6 py-5">
                    <div>
                      <h2 className="text-xl font-bold text-[#084E75]">Apply for CGTMSE Funding</h2>
                      <p className="mt-1 text-sm text-[#8E8E90]">
                        Fill in your details and our team will contact you.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={()=>setModalOpen(false)}
                      className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#084E75]/15 text-[#084E75] transition-colors hover:bg-[#084E75]/10"
                    >
                      <IconX className="size-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label htmlFor="cgtmse-name" className="mb-2 block text-sm font-medium text-[#084E75]">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="cgtmse-name"
                            name="name"
                            type="text"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cgtmse-email" className="mb-2 block text-sm font-medium text-[#084E75]">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="cgtmse-email"
                            name="email"
                            type="email"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#084E75]/20 transition-colors hover:bg-[#0a5d8a]"
                      >
                        Submit Application
                      </button>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
  
        <section className="max-w-full rounded-xl border border-slate-800 [-webkit-overflow-scrolling:touch] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-190 table-auto text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-800 bg-[#084E75] text-sm uppercase text-white">
                <tr>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Scheme</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#084E75]">
                {/* {
                  tablePageItems.map((s) => ( */}
                    <tr className="text-[#084E75] text-sm">
                      <td className="px-4 py-2 text-[#084E75]">CGTMSE Scheme</td>
                      <td className="px-4 py-2 text-[#084E75]">Test</td>
                    </tr>
                  {/* ))
                } */}
              </tbody>
            </table>
          </div>
          {/* {!loading ? (
            <TablePagination
              page={tablePage}
              totalPages={tableTotalPages}
              totalItems={tableTotal}
              pageSize={tablePageSize}
              onPageChange={setTablePage}
              onPageSizeChange={setTablePageSize}
            />
          ) : null} */}
        </section>
      </div>
    </>
  )
}

export default page