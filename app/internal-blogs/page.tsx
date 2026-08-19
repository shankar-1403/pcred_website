  "use client";

import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { db } from "@/src/lib/firebase";
import { push, ref, set } from "firebase/database";
import { useAuth } from "@/src/context/AuthContext";
import { useBlogs, type Blog } from "@/src/hooks/useBlogs";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import TablePagination from "@/components/TablePagination";
import { usePagination } from "@/src/hooks/usePagination";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Essentials, Paragraph, Bold, Italic, Underline, Link, List, Heading } from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import ProtectedRoute from "@/components/ProtectedRoute";
import InternalHeader from "@/components/InternalHeader";

const initialFormData = {
  title: "",
  excerpt: "",
  category: "",
  author: "",
  date: "",
  readTime: "",
  featured: false,
};

const initialFiles = { cover_image: null as File | null, inner_image: null as File | null };
const initialExistingImages = { cover_image: "", inner_image: "" };

  async function uploadBlogAsset(blogId: string, field: string, file: File, idToken: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("blogId", blogId);
  formData.append("field", field);

  const response = await fetch("/api/blogs/upload", {
    method: "POST",
    headers: { Authorization: `Bearer ${idToken}` },
    body: formData,
  });

  const data = (await response.json()) as { url?: string; error?: string };
  if (!response.ok) throw new Error(data.error ?? "Image upload failed.");
  if (!data.url) throw new Error("Upload succeeded but no URL returned.");
  return data.url;
}

function BlogsCMSPage() {
  const { user } = useAuth();
  const { blogs, loading: blogsLoading } = useBlogs();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(initialFiles);
  const [existingImages, setExistingImages] = useState(initialExistingImages);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  const {
    page: tablePage,
    setPage: setTablePage,
    pageSize: tablePageSize,
    setPageSize: setTablePageSize,
    total: tableTotal,
    totalPages: tableTotalPages,
    pageItems: tablePageItems,
  } = usePagination(blogs);

  const resetForm = () => {
    setFormData(initialFormData);
    setContent("");
    setFiles(initialFiles);
    setExistingImages(initialExistingImages);
    setEditingBlogId(null);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files: selected } = e.target;
    const file = selected?.[0] ?? null;
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlogId(blog.id);
    setFormData({
      title: blog.title ?? "",
      excerpt: blog.excerpt ?? "",
      category: blog.category ?? "",
      author: blog.author ?? "",
      date: blog.date ?? "",
      readTime: blog.readTime ?? "",
      featured: blog.featured ?? false,
    });
    setContent(blog.content ?? "");
    setFiles(initialFiles);
    setExistingImages({ cover_image: blog.cover_image ?? "", inner_image: blog.inner_image ?? "" });
    setError("");
    setSuccess("");
    setModalOpen(true);
  };

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const isEditing = editingBlogId !== null;

    if (!user) {
      setError("You must be signed in to save a blog.");
      return;
    }

    if (!isEditing && !files.cover_image) {
      setError("Please upload a cover image.");
      return;
    }

    if (isEditing && !files.cover_image && !existingImages.cover_image) {
      setError("Cover image is required.");
      return;
    }

    setLoading(true);

    try {
      const idToken = await user.getIdToken();
      const blogId = isEditing ? editingBlogId : push(ref(db, "blogs")).key;
      if (!blogId) throw new Error("Could not create blog record.");

      const [cover_image, inner_image] = await Promise.all([
        files.cover_image
          ? uploadBlogAsset(blogId, "cover_image", files.cover_image, idToken)
          : Promise.resolve(existingImages.cover_image),
        files.inner_image
          ? uploadBlogAsset(blogId, "inner_image", files.inner_image, idToken)
          : Promise.resolve(existingImages.inner_image),
      ]);

      const now = Date.now();
      const existingBlog = isEditing ? blogs.find((b) => b.id === editingBlogId) : null;

      await set(ref(db, `blogs/${blogId}`), {
        title: formData.title.trim(),
        excerpt: formData.excerpt.trim(),
        category: formData.category.trim(),
        author: formData.author.trim(),
        date: formData.date.trim(),
        readTime: formData.readTime.trim(),
        featured: formData.featured,
        content,
        cover_image,
        inner_image,
        createdAt: isEditing ? (existingBlog?.createdAt ?? now) : now,
        createdBy: isEditing ? (existingBlog?.createdBy ?? user.uid) : user.uid,
        updatedAt: now,
        updatedBy: user.uid,
      });

      setSuccess(isEditing ? "Blog updated successfully." : "Blog saved successfully.");
      setModalOpen(false);
      resetForm();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not save blog.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 space-y-6">
        <section className="flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#084E75]">Blog master</h1>
          </div>
          <div>
            <button onClick={handleOpen} className="text-sm font-medium bg-[#084E75] text-white py-2 px-4 rounded-xl cursor-pointer">
              Add Blog
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
                        {editingBlogId ? "Edit Blog" : "Add Blog"}
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
                        <label htmlFor="title" className="mb-2 block text-sm font-medium text-[#084E75]">Title *</label>
                        <input id="title" name="title" required value={formData.title} onChange={handleChange} type="text" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                      </div>

                      {/* Excerpt */}
                      <div>
                        <label htmlFor="excerpt" className="mb-2 block text-sm font-medium text-[#084E75]">Excerpt *</label>
                        <textarea id="excerpt" name="excerpt" required rows={3} value={formData.excerpt} onChange={handleChange} className="border border-[#084E75] rounded-4xl w-full py-2 px-3 resize-none" />
                      </div>

                      <hr className="text-[#084E75]" />

                      {/* Category, Author, Date, ReadTime */}
                      <div className="grid gap-4 grid-cols-2">
                        <div>
                          <label htmlFor="category" className="mb-2 block text-sm font-medium text-[#084E75]">Category</label>
                          <input id="category" name="category" value={formData.category} onChange={handleChange} type="text" placeholder="e.g. Funding" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                        <div>
                          <label htmlFor="author" className="mb-2 block text-sm font-medium text-[#084E75]">Author</label>
                          <input id="author" name="author" value={formData.author} onChange={handleChange} type="text" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                        <div>
                          <label htmlFor="date" className="mb-2 block text-sm font-medium text-[#084E75]">Date</label>
                          <input id="date" name="date" value={formData.date} onChange={handleChange} type="text" placeholder="e.g. Mar 12, 2026" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                        <div>
                          <label htmlFor="readTime" className="mb-2 block text-sm font-medium text-[#084E75]">Read Time</label>
                          <input id="readTime" name="readTime" value={formData.readTime} onChange={handleChange} type="text" placeholder="e.g. 5 min read" className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                        </div>
                      </div>

                      <hr className="text-[#084E75]" />

                      {/* Cover image + featured */}
                      <div className="grid gap-4 grid-cols-2">
                        <div>
                          <label htmlFor="cover_image" className="mb-2 block text-sm font-medium text-[#084E75]">Cover Image {!editingBlogId && "*"}</label>
                          <input id="cover_image" name="cover_image" type="file" accept="image/*" onChange={handleFileChange} className="border border-[#084E75] rounded-4xl w-full py-2 px-3" />
                          <p className="mt-1 text-xs text-[#8E8E90]">Locked to 16:9 (e.g. 1280x720px).</p>
                          {existingImages.cover_image ? (
                            <p className="mt-1 text-xs text-[#8E8E90]">Current image saved. Upload only to replace.</p>
                          ) : null}
                        </div>
                        <div className="flex items-center gap-3 pt-6">
                          <input
                            type="checkbox"
                            id="featured"
                            name="featured"
                            checked={formData.featured}
                            onChange={handleChange}
                            className="size-4 accent-[#084E75]"
                          />
                          <label htmlFor="featured" className="text-sm font-medium text-[#084E75]">Mark as Featured Article</label>
                        </div>
                      </div>

                      {/* Blog image (internal — shown inside the article only, not on cards) */}
                      <div>
                        <label htmlFor="inner_image" className="mb-2 block text-sm font-medium text-[#084E75]">Blog Image (Internal)</label>
                        <input
                          id="inner_image"
                          name="inner_image"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="border border-[#084E75] rounded-4xl w-full py-2 px-3"
                        />
                        <p className="mt-1 text-xs text-[#8E8E90]">Shown inside the blog only, not on cards. Any size/aspect ratio accepted.</p>
                        {existingImages.inner_image ? (
                          <p className="mt-1 text-xs text-[#8E8E90]">Current image saved. Upload only to replace.</p>
                        ) : null}
                      </div>

                      <hr className="text-[#084E75]" />

                      {/* Content */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#084E75]">Content (Full Article)</label>
                        <CKEditor
                          editor={ClassicEditor}
                          config={{
                            licenseKey: "GPL",
                            plugins: [Essentials, Paragraph, Bold, Italic, Underline, Link, List, Heading],
                            toolbar: ["heading", "|", "undo", "redo", "|", "bold", "italic", "underline", "link", "bulletedList", "numberedList"],   
                          }}
                          data={content}
                          onChange={(_, editor) => setContent(editor.getData())}
                        />
                      </div>                                                      

                      <div className="flex justify-center">
                        <div>
                          <button          
                            type="submit"
                            disabled={loading}
                            className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#084E75]/20 transition-colors hover:bg-[#0a5d8a] disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {loading ? "Saving…" : editingBlogId ? "Update" : "Submit"}
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
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Title</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Category</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Author</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Date</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Featured</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#084E75]">
                {blogsLoading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-[#8E8E90]">Loading blogs…</td>
                  </tr>
                ) : blogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-[#8E8E90]">No blogs added yet.</td>
                  </tr>
                ) : (
                  tablePageItems.map((blog) => (
                    <tr key={blog.id} className="text-[#084E75] text-sm">
                      <td className="px-4 py-2 text-[#084E75] max-w-xs truncate">{blog.title || "Untitled"}</td>
                      <td className="px-4 py-2 text-[#8E8E90]">{blog.category || "N/A"}</td>
                      <td className="px-4 py-2 text-[#8E8E90]">{blog.author || "N/A"}</td>
                      <td className="px-4 py-2 text-[#8E8E90]">{blog.date || "N/A"}</td>
                      <td className="px-4 py-2">
                        {blog.featured ? (
                          <span className="rounded-full bg-[#B8892E]/15 px-2 py-0.5 text-xs font-semibold text-[#B8892E]">Yes</span>
                        ) : "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(blog)}
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
          {!blogsLoading && (
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
      <BlogsCMSPage />
    </ProtectedRoute>
  );
}
