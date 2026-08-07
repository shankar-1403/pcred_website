"use client";

import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { db } from "@/src/lib/firebase";
import { push, ref, set } from "firebase/database";
import { useAuth } from "@/src/context/AuthContext";
import { useCareers, type Career } from "@/src/hooks/useCareers";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import TablePagination from "@/components/TablePagination";
import { usePagination } from "@/src/hooks/usePagination";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Essentials, Paragraph, Bold, Italic, Underline, List } from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import ProtectedRoute from "@/components/ProtectedRoute";
import InternalHeader from "@/components/InternalHeader";

const initialFormData = {
  title: "",
  department: "",
  location: "",
  type: "",
  experience: "",
  openings: "",
  active: true,
};

function CareersCMSPage() {
  const { user } = useAuth();
  const { careers, loading: careersLoading } = useCareers();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCareerId, setEditingCareerId] = useState<string | null>(null);

  const {
    page: tablePage,
    setPage: setTablePage,
    pageSize: tablePageSize,
    setPageSize: setTablePageSize,
    total: tableTotal,
    totalPages: tableTotalPages,
    pageItems: tablePageItems,
  } = usePagination(careers);

  const resetForm = () => {
    setFormData(initialFormData);
    setDescription("");
    setRequirements("");
    setEditingCareerId(null);
    setError("");
    setSuccess("");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    resetForm();
  };

  const handleOpen = () => {
    resetForm();
    setModalOpen(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleEdit = (career: Career) => {
    setEditingCareerId(career.id);
    setFormData({
      title: career.title ?? "",
      department: career.department ?? "",
      location: career.location ?? "",
      type: career.type ?? "",
      experience: career.experience ?? "",
      openings: String(career.openings ?? ""),
      active: career.active ?? true,
    });
    setDescription(career.description ?? "");
    setRequirements(career.requirements ?? "");
    setError("");
    setSuccess("");
    setModalOpen(true);
  };

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!user) { setError("You must be signed in."); return; }
    if (!formData.title) { setError("Title is required."); return; }
    setLoading(true);
    try {
      const now = Date.now();
      const isEditing = editingCareerId !== null;
      const careerId = isEditing ? editingCareerId : push(ref(db, "careers")).key;
      if (!careerId) throw new Error("Could not create career record.");
      const existing = isEditing ? careers.find((c) => c.id === editingCareerId) : null;

      await set(ref(db, `careers/${careerId}`), {
        title: formData.title.trim(),
        department: formData.department.trim(),
        location: formData.location.trim(),
        type: formData.type.trim(),
        experience: formData.experience.trim(),
        openings: Number(formData.openings) || 0,
        active: formData.active,
        description,
        requirements,
        createdAt: isEditing ? (existing?.createdAt ?? now) : now,
        createdBy: isEditing ? (existing?.createdBy ?? user.uid) : user.uid,
        updatedAt: now,
        updatedBy: user.uid,
      });

      setSuccess(isEditing ? "Job updated successfully." : "Job saved successfully.");
      setModalOpen(false);
      resetForm();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not save job.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 space-y-6">
        <section className="flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#084E75]">Careers master</h1>
          </div>
          <div>
            <button onClick={handleOpen} className="text-sm font-medium bg-[#084E75] text-white py-2 px-4 rounded-xl cursor-pointer">
              Add Job
            </button>
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
                  onClick={handleCloseModal}
                  className="absolute inset-0 cursor-pointer bg-[#084E75]/40 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 16 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-4xl bg-white shadow-2xl"
                >
                  <div className="sticky top-0 flex items-center justify-between border-b border-[#084E75]/10 bg-white px-6 py-5">
                    <div>
                      <h2 className="text-xl font-bold text-[#084E75]">
                        {editingCareerId ? "Edit Job" : "Add Job"}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#084E75]/15 text-[#084E75] transition-colors hover:bg-[#084E75]/10"
                    >
                      <IconX className="size-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <form className="space-y-4" onSubmit={handleSave}>
                      {error ? (
                        <p className="rounded-4xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                      ) : null}
                      {success ? (
                        <p className="rounded-4xl bg-green-50 px-4 py-3 text-sm text-green-700">{success}</p>
                      ) : null}

                      {/* Title */}
                      <div>
                        <label htmlFor="title" className="mb-2 block text-sm font-medium text-[#084E75]">Job Title *</label>
                        <input id="title" name="title" required value={formData.title} onChange={handleChange} type="text" placeholder="e.g. Financial Analyst" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                      </div>

                      <hr className="text-[#084E75]" />

                      <div className="grid gap-4 grid-cols-2">
                        <div>
                          <label htmlFor="department" className="mb-2 block text-sm font-medium text-[#084E75]">Department</label>
                          <input id="department" name="department" value={formData.department} onChange={handleChange} type="text" placeholder="e.g. Advisory" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                        <div>
                          <label htmlFor="location" className="mb-2 block text-sm font-medium text-[#084E75]">Location</label>
                          <input id="location" name="location" value={formData.location} onChange={handleChange} type="text" placeholder="e.g. Mumbai" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                        <div>
                          <label htmlFor="type" className="mb-2 block text-sm font-medium text-[#084E75]">Job Type</label>
                          <select id="type" name="type" value={formData.type} onChange={handleChange} className="border border-[#084E75] rounded-4xl w-full py-2 px-3">
                            <option value="">Select type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Internship">Internship</option>
                            <option value="Contract">Contract</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="experience" className="mb-2 block text-sm font-medium text-[#084E75]">Experience</label>
                          <input id="experience" name="experience" value={formData.experience} onChange={handleChange} type="text" placeholder="e.g. 2-4 years" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                        <div>
                          <label htmlFor="openings" className="mb-2 block text-sm font-medium text-[#084E75]">No. of Openings</label>
                          <input id="openings" name="openings" value={formData.openings} onChange={handleChange} type="number" min="1" placeholder="1" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                        <div className="flex items-center gap-3 pt-6">
                          <input type="checkbox" id="active" name="active" checked={formData.active} onChange={handleChange} className="size-4 accent-[#084E75]" />
                          <label htmlFor="active" className="text-sm font-medium text-[#084E75]">Active (visible on website)</label>
                        </div>
                      </div>

                      <hr className="text-[#084E75]" />

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#084E75]">Job Description</label>
                        <CKEditor
                          editor={ClassicEditor}
                          config={{
                            licenseKey: "GPL",
                            plugins: [Essentials, Paragraph, Bold, Italic, Underline, List],
                            toolbar: ["undo", "redo", "|", "bold", "italic", "underline", "bulletedList", "numberedList"],
                          }}
                          data={description}
                          onChange={(_, editor) => setDescription(editor.getData())}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#084E75]">Requirements</label>
                        <CKEditor
                          editor={ClassicEditor}
                          config={{
                            licenseKey: "GPL",
                            plugins: [Essentials, Paragraph, Bold, Italic, Underline, List],
                            toolbar: ["undo", "redo", "|", "bold", "italic", "underline", "bulletedList", "numberedList"],
                          }}
                          data={requirements}
                          onChange={(_, editor) => setRequirements(editor.getData())}
                        />
                      </div>

                      <div className="flex justify-center">
                        <div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#084E75]/20 transition-colors hover:bg-[#0a5d8a] disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {loading ? "Saving…" : editingCareerId ? "Update" : "Submit"}
                          </button>
                        </div>
                      </div>
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
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Job Title</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Department</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Location</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Type</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Status</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#084E75]">
                {careersLoading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-[#8E8E90]">Loading jobs…</td>
                  </tr>
                ) : careers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-[#8E8E90]">No jobs added yet.</td>
                  </tr>
                ) : (
                  tablePageItems.map((career) => (
                    <tr key={career.id} className="text-[#084E75] text-sm">
                      <td className="px-4 py-2 text-[#084E75] max-w-xs truncate">{career.title || "Untitled"}</td>
                      <td className="px-4 py-2 text-[#8E8E90]">{career.department || "N/A"}</td>
                      <td className="px-4 py-2 text-[#8E8E90]">{career.location || "N/A"}</td>
                      <td className="px-4 py-2 text-[#8E8E90]">{career.type || "N/A"}</td>
                      <td className="px-4 py-2">
                        {career.active ? (
                          <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600">Active</span>
                        ) : (
                          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-400">Inactive</span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(career)}
                          className="cursor-pointer rounded-xl bg-[#084E75] px-3 py-1 text-xs text-white transition-colors hover:bg-[#0a5d8a]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {!careersLoading && (
            <TablePagination
              page={tablePage}
              totalPages={tableTotalPages}
              pageSize={tablePageSize}
              totalItems={tableTotal}
              onPageChange={setTablePage}
              onPageSizeChange={setTablePageSize}
            />
          )}
        </section>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <ProtectedRoute>
      <InternalHeader />
      <CareersCMSPage />
    </ProtectedRoute>
  );
}
