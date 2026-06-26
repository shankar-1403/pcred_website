"use client"

import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import { db } from '@/src/lib/firebase';
import { push, ref, set } from 'firebase/database';
import { useAuth } from '@/src/context/AuthContext';
import { useSchemes, type Scheme } from '@/src/hooks/useSchemes';
import { AnimatePresence, motion } from 'motion/react';
import { IconX, IconPlus, IconMinus } from '@tabler/icons-react';
import TablePagination from '@/components/TablePagination';
import { usePagination } from '@/src/hooks/usePagination';

const initialFormData = {
  route:"",
  section_1_subheader:"",
  section_1_header: "",
  section_1_description: "",
  video_link: "",
  section_2_header: "",
  section_2_description: "",
  section_3_description: "",
  faq_description: "",
};

const initialPoint = { icon: "", point: "" };
const initialTableRow = {
  icon: "",
  label: "",
  description: "",
  criteria: "",
  criteria_description: "",
};
const initialFaq = { question: "", answer: "" };

const initialFiles = {
  section_1_logo: null as File | null,
  section_1_banner: null as File | null,
  section_3_img: null as File | null,
  faq_image: null as File | null,
};

const initialExistingImages = {
  section_1_logo: "",
  section_1_banner: "",
  section_3_img: "",
  faq_image: "",
};

async function uploadSchemeAsset(
  schemeId: string,
  field: string,
  file: File,
  idToken: string
) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("schemeId", schemeId);
  formData.append("field", field);

  const response = await fetch("/api/schemes/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    body: formData,
  });

  const data = (await response.json()) as { url?: string; error?: string };

  if (!response.ok) {
    throw new Error(data.error ?? "Image upload failed.");
  }

  if (!data.url) {
    throw new Error("Upload succeeded but no file URL was returned.");
  }

  return data.url;
}

function page() {
  const { user } = useAuth();
  const { schemes, loading: schemesLoading } = useSchemes();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [files, setFiles] = useState(initialFiles);
  const [items, setItems] = useState([{ ...initialPoint }]);
  const [table, setTable] = useState([{ ...initialTableRow }]);
  const [faq, setFaq] = useState([{ ...initialFaq }]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSchemeId, setEditingSchemeId] = useState<string | null>(null);
  const [existingImages, setExistingImages] = useState(initialExistingImages);

  const {
    page: tablePage,
    setPage: setTablePage,
    pageSize: tablePageSize,
    setPageSize: setTablePageSize,
    total: tableTotal,
    totalPages: tableTotalPages,
    pageItems: tablePageItems,
  } = usePagination(schemes)


  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        icon: "",
        point: "",
      },
    ]);
  };
  const handleAddTable = () => {
    setTable((prev) => [
      ...prev,
      {
        icon:"",
        label: "",
        description: "",
        criteria:"",
        criteria_description:"",
      },
    ]);
  };
  const handleAddFaq = () => {
    setFaq((prev) => [
      ...prev,
      {
        question: "",
        answer: "",
      },
    ]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files: selected } = e.target;
    const file = selected?.[0] ?? null;
    setFiles((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setFiles(initialFiles);
    setItems([{ ...initialPoint }]);
    setTable([{ ...initialTableRow }]);
    setFaq([{ ...initialFaq }]);
    setEditingSchemeId(null);
    setExistingImages(initialExistingImages);
    setError("");
    setSuccess("");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    resetForm();
  };

  const handlePointChange = (
    index: number,
    field: "icon" | "point",
    value: string
  ) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleTableChange = (
    index: number,
    field: "icon" | "label" | "description" | "criteria" | "criteria_description",
    value: string,
  ) => {
    setTable((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleFaqChange = (
    index: number,
    field: "question" | "answer",
    value: string,
  ) => {
    setFaq((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };


  const handleRemoveItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveTableItem = (index: number) => {
    setTable((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveFaqItem = (index: number) => {
    setFaq((prev) => prev.filter((_, i) => i !== index));
  };
  const handleOpen = () => {
    resetForm();
    setModalOpen(true);
  };

  const handleEdit = (scheme: Scheme) => {
    setEditingSchemeId(scheme.id);
    setFormData({
      route:scheme.route ?? "",
      section_1_subheader:scheme.section_1_subheader ?? "",
      section_1_header: scheme.section_1_header ?? "",
      section_1_description: scheme.section_1_description ?? "",
      video_link: scheme.video_link ?? "",
      section_2_header: scheme.section_2_header ?? "",
      section_2_description: scheme.section_2_description ?? "",
      section_3_description: scheme.section_3_description ?? "",
      faq_description: scheme.faq_description ?? "",
    });
    setItems(
      scheme.section_1_points?.length
        ? scheme.section_1_points.map((item) => ({ ...item }))
        : [{ ...initialPoint }]
    );
    setTable(
      scheme.eligibility_table?.length
        ? scheme.eligibility_table.map((item) => ({ ...item }))
        : [{ ...initialTableRow }]
    );
    setFaq(
      scheme.faqs?.length
        ? scheme.faqs.map((item) => ({ ...item }))
        : [{ ...initialFaq }]
    );
    setFiles(initialFiles);
    setExistingImages({
      section_1_logo: scheme.section_1_logo ?? "",
      section_1_banner: scheme.section_1_banner ?? "",
      section_3_img: scheme.section_3_img ?? "",
      faq_image: scheme.faq_image ?? "",
    });
    setError("");
    setSuccess("");
    setModalOpen(true);
  };

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const isEditing = editingSchemeId !== null;

    if (!user) {
      setError("You must be signed in to save a scheme.");
      return;
    }

    if (!isEditing) {
      if (!files.section_1_logo || !files.section_1_banner || !files.section_3_img || !files.faq_image) {
        setError("Please upload all required images.");
        return;
      }
    } else {
      const missingBannerLogo = !files.section_1_logo && !existingImages.section_1_logo;
      const missingBanner = !files.section_1_banner && !existingImages.section_1_banner;
      const missingSection3 = !files.section_3_img && !existingImages.section_3_img;
      const missingFaq = !files.faq_image && !existingImages.faq_image;

      if (missingBannerLogo || missingBanner || missingSection3 || missingFaq) {
        setError("Each image field must have an existing or newly uploaded file.");
        return;
      }
    }

    setLoading(true);

    try {
      const idToken = await user.getIdToken();
      const schemeId = isEditing
        ? editingSchemeId
        : push(ref(db, "schemes")).key;

      if (!schemeId) {
        throw new Error("Could not create scheme record.");
      }

      const existingScheme = isEditing
        ? schemes.find((scheme) => scheme.id === editingSchemeId)
        : null;

      let section_1_logo = existingImages.section_1_logo;
      let section_1_banner = existingImages.section_1_banner;
      let section_3_img = existingImages.section_3_img;
      let faq_image = existingImages.faq_image;

      const uploads: Promise<void>[] = [];

      if (files.section_1_logo) {
        uploads.push(
          uploadSchemeAsset(schemeId, "section_1_logo", files.section_1_logo, idToken).then(
            (url) => {
              section_1_logo = url;
            }
          )
        );
      }

      if (files.section_1_banner) {
        uploads.push(
          uploadSchemeAsset(schemeId, "section_1_banner", files.section_1_banner, idToken).then(
            (url) => {
              section_1_banner = url;
            }
          )
        );
      }

      if (files.section_3_img) {
        uploads.push(
          uploadSchemeAsset(schemeId, "section_3_img", files.section_3_img, idToken).then(
            (url) => {
              section_3_img = url;
            }
          )
        );
      }

      if (files.faq_image) {
        uploads.push(
          uploadSchemeAsset(schemeId, "faq_image", files.faq_image, idToken).then((url) => {
            faq_image = url;
          })
        );
      }

      await Promise.all(uploads);

      const section_1_points = items.filter(
        (item) => item.icon.trim() || item.point.trim()
      );
      const eligibility_table = table.filter(
        (item) =>
          item.icon.trim() ||
          item.label.trim() ||
          item.description.trim() ||
          item.criteria.trim() ||
          item.criteria_description.trim()
      );
      const faqs = faq.filter(
        (item) => item.question.trim() || item.answer.trim()
      );

      await set(ref(db, `schemes/${schemeId}`), {
        route:formData.route.trim(),
        section_1_logo,
        section_1_header: formData.section_1_header.trim(),
        section_1_subheader: formData.section_1_subheader.trim(),
        section_1_description: formData.section_1_description.trim(),
        section_1_points,
        video_link: formData.video_link.trim(),
        section_1_banner,
        section_2_header: formData.section_2_header.trim(),
        section_2_description: formData.section_2_description.trim(),
        section_3_description: formData.section_3_description.trim(),
        section_3_img,
        eligibility_table,
        faq_description: formData.faq_description.trim(),
        faq_image,
        faqs,
        createdAt: existingScheme?.createdAt ?? Date.now(),
        createdBy: existingScheme?.createdBy ?? user.uid ?? null,
        updatedAt: Date.now(),
        updatedBy: user.uid ?? null,
      });

      setSuccess(isEditing ? "Scheme updated successfully." : "Scheme saved successfully.");
      setModalOpen(false);
      resetForm();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Could not save scheme.";
      setError(message);
    } finally {
      setLoading(false);
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
                        {editingSchemeId ? "Edit Scheme" : "Add Scheme"}
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
                      <div>
                        <label htmlFor="route" className="mb-2 block text-sm font-medium text-[#084E75]">Route</label>
                        <input id="route" name="route" value={formData.route} onChange={handleChange} type="text" className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                      </div>
                      <h3 className="text-lg font-semibold text-[#084E75] underline">Section 1</h3>
                      <div className="grid gap-4 grid-cols-3">
                        <div>
                          <label htmlFor="section_1_logo" className="mb-2 block text-sm font-medium text-[#084E75]">Logo</label>
                          <input id="section_1_logo" name="section_1_logo" type="file" accept="image/*" onChange={handleFileChange} className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                        <div>
                          <label htmlFor="section_1_header" className="mb-2 block text-sm font-medium text-[#084E75]">Header</label>
                          <input id="section_1_header" name="section_1_header" value={formData.section_1_header} onChange={handleChange} type="text" className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                        <div>
                          <label htmlFor="section_1_subheader" className="mb-2 block text-sm font-medium text-[#084E75]">Sub Header</label>
                          <input id="section_1_subheader" name="section_1_subheader" value={formData.section_1_subheader} onChange={handleChange} type="text" className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                        <div>
                          <label htmlFor="section_1_description" className="mb-2 block text-sm font-medium text-[#084E75]">Description</label>
                          <input id="section_1_description" name="section_1_description" value={formData.section_1_description} onChange={handleChange} type="text" className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                      </div>
                      <div className='bg-[#DDB162]/10 p-4 rounded-4xl'>
                        {items.map((item, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-7 gap-4 mb-4"
                          >
                            <div className="col-span-3">
                              <label className="mb-2 block text-sm font-medium text-[#084E75]">Icon</label>
                              <input type="text" value={item.icon} onChange={(e) => handlePointChange(index, "icon", e.target.value)}
                                className="border border-[#084E75] rounded-4xl w-full py-2 px-3"
                              />
                            </div>

                            <div className="col-span-3">
                              <label className="mb-2 block text-sm font-medium text-[#084E75]">
                                Point
                              </label>
                              <input type="text" value={item.point} onChange={(e) => handlePointChange(index, "point", e.target.value)} className="border border-[#084E75] rounded-4xl w-full py-2 px-3"/>
                            </div>

                            <div className="flex gap-2 items-end">
                              {items.length > 1 && (
                                <button type="button" onClick={() => handleRemoveItem(index)} className="bg-red-500 text-white p-2 rounded-4xl">
                                  <IconMinus />
                                </button>
                              )}

                              {index === items.length - 1 && (
                                <button
                                  type="button"
                                  onClick={handleAddItem}
                                  className="bg-[#084E75] text-white p-2 rounded-4xl"
                                >
                                  <IconPlus />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="video_link" className="mb-2 block text-sm font-medium text-[#084E75]">Video Link</label>
                          <input id="video_link" name="video_link" type="text" value={formData.video_link} onChange={handleChange} className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                        <div>
                          <label htmlFor="section_1_banner" className="mb-2 block text-sm font-medium text-[#084E75]">Banner</label>
                          <input id="section_1_banner" name="section_1_banner" onChange={handleFileChange} type="file" accept="image/*" className='border border-[#084E75] rounded-4xl w-full py-2 px-3' />
                          {existingImages.section_1_banner ? (
                            <p className="mt-1 text-xs text-[#8E8E90]">Current image saved. Upload only to replace.</p>
                          ) : null}
                        </div>
                      </div>
                      <hr className=' text-[#084E75]'/>
                      <h3 className="text-lg font-semibold text-[#084E75] underline">Section 2</h3>
                      <div className="grid gap-4 grid-cols-2">
                        <div>
                          <label htmlFor="section_2_header" className="mb-2 block text-sm font-medium text-[#084E75]">Header</label>
                          <input id="section_2_header" name="section_2_header" value={formData.section_2_header} onChange={handleChange} type="text" className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                        <div>
                          <label htmlFor="section_2_description" className="mb-2 block text-sm font-medium text-[#084E75]">Description</label>
                          <textarea
                            id="section_2_description"
                            name="section_2_description"
                            value={formData.section_2_description}
                            onChange={handleChange}
                            rows={5}
                            className="border border-[#084E75] rounded-4xl w-full py-2 px-3 resize-none"
                          />
                        </div>
                      </div>
                      <hr className=' text-[#084E75]'/>
                      <h3 className="text-lg font-semibold text-[#084E75] underline">Section 3</h3>
                      <div className="grid gap-4 grid-cols-2">
                        <div>
                          <label htmlFor="section_3_description" className="mb-2 block text-sm font-medium text-[#084E75]">Description</label>
                          <input id="section_3_description" name="section_3_description" value={formData.section_3_description} onChange={handleChange} type="text" className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                        <div>
                          <label htmlFor="section_3_img" className="mb-2 block text-sm font-medium text-[#084E75]">Image</label>
                          <input id="section_3_img" name="section_3_img" onChange={handleFileChange} type="file" accept="image/*" className='border border-[#084E75] rounded-4xl w-full py-2 px-3' />
                          {existingImages.section_3_img ? (
                            <p className="mt-1 text-xs text-[#8E8E90]">Current image saved. Upload only to replace.</p>
                          ) : null}
                        </div>
                      </div>
                      <div className='bg-[#DDB162]/10 p-4 rounded-4xl'>
                        <p className="text-lg font-semibold text-[#084E75] underline mb-4">Table Section</p>
                        {table.map((item, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-11 gap-4 mb-4"
                          >
                            <div className="col-span-2">
                              <label className="mb-2 block text-sm font-medium text-[#084E75]">Icon</label>
                              <input type="text" value={item.icon} onChange={(e) => handleTableChange(index, "icon", e.target.value)}
                                className="border border-[#084E75] rounded-4xl w-full py-2 px-3"
                              />
                            </div>

                            <div className="col-span-2">
                              <label className="mb-2 block text-sm font-medium text-[#084E75]">Label</label>
                              <input type="text" value={item.label} onChange={(e) => handleTableChange(index, "label", e.target.value)}
                                className="border border-[#084E75] rounded-4xl w-full py-2 px-3"/>
                            </div>

                            <div className="col-span-2">
                              <label className="mb-2 block text-sm font-medium text-[#084E75]">Description</label>
                              <input type="text" value={item.description} onChange={(e) => handleTableChange(index, "description", e.target.value)} className="border border-[#084E75] rounded-4xl w-full py-2 px-3"/>
                            </div>

                            <div className="col-span-2">
                              <label className="mb-2 block text-sm font-medium text-[#084E75]">Criteria</label>
                              <input type="text" value={item.criteria} onChange={(e) => handleTableChange(index, "criteria", e.target.value)}
                                className="border border-[#084E75] rounded-4xl w-full py-2 px-3"
                              />
                            </div>

                            <div className="col-span-2">
                              <label className="mb-2 block text-sm font-medium text-[#084E75]">Criteria Description</label>
                              <input type="text" value={item.criteria_description} onChange={(e) => handleTableChange(index, "criteria_description", e.target.value)} className="border border-[#084E75] rounded-4xl w-full py-2 px-3"/>
                            </div>

                            <div className="flex gap-2 items-end col-span-1">
                              {table.length > 1 && (
                                <button type="button" onClick={() => handleRemoveTableItem(index)} className="bg-red-500 text-white p-2 rounded-4xl">
                                  <IconMinus />
                                </button>
                              )}

                              {index === table.length - 1 && (
                                <button type="button" onClick={handleAddTable} className="bg-[#084E75] text-white p-2 rounded-4xl">
                                  <IconPlus />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <hr className=' text-[#084E75]'/>
                      <h4 className="text-lg font-semibold text-[#084E75] underline">FAQ Section</h4>
                      <div className="grid gap-4 grid-cols-2">
                        <div>
                          <label htmlFor="faq_description" className="mb-2 block text-sm font-medium text-[#084E75]">Description</label>
                          <input id="faq_description" name="faq_description" type="text" value={formData.faq_description} onChange={handleChange} className='border border-[#084E75] rounded-4xl w-full py-2 px-3'/>
                        </div>
                        <div>
                          <label htmlFor="faq_image" className="mb-2 block text-sm font-medium text-[#084E75]">Image</label>
                          <input id="faq_image" name="faq_image" onChange={handleFileChange} type="file" accept="image/*" className='border border-[#084E75] rounded-4xl w-full py-2 px-3' />
                          {existingImages.faq_image ? (
                            <p className="mt-1 text-xs text-[#8E8E90]">Current image saved. Upload only to replace.</p>
                          ) : null}
                        </div>
                        <div className='bg-[#DDB162]/10 p-4 rounded-4xl col-span-2'>
                          {faq.map((item, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-7 gap-4 mb-4"
                            >
                              <div className="col-span-3">
                                <label className="mb-2 block text-sm font-medium text-[#084E75]">Question</label>
                                <input type="text" value={item.question} onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                                  className="border border-[#084E75] rounded-4xl w-full py-2 px-3"
                                />
                              </div>

                              <div className="col-span-3">
                                <label className="mb-2 block text-sm font-medium text-[#084E75]">Answer</label>
                                <input type="text" value={item.answer} onChange={(e) => handleFaqChange(index, "answer", e.target.value)} className="border border-[#084E75] rounded-4xl w-full py-2 px-3"/>
                              </div>

                              <div className="flex gap-2 items-end">
                                {faq.length > 1 && (
                                  <button type="button" onClick={() => handleRemoveFaqItem(index)} className="bg-red-500 text-white p-2 rounded-4xl">
                                    <IconMinus />
                                  </button>
                                )}

                                {index === faq.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={handleAddFaq}
                                    className="bg-[#084E75] text-white p-2 rounded-4xl"
                                  >
                                    <IconPlus />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <button type="submit" disabled={loading} className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#084E75]/20 transition-colors hover:bg-[#0a5d8a] disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Saving…" : editingSchemeId ? "Update" : "Submit"}</button>
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
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Scheme</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Created</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#084E75]">
                {schemesLoading ? (
                  <tr className="text-[#084E75] text-sm">
                    <td colSpan={3} className="px-4 py-6 text-center text-[#8E8E90]">
                      Loading schemes…
                    </td>
                  </tr>
                ) : schemes.length === 0 ? (
                  <tr className="text-[#084E75] text-sm">
                    <td colSpan={3} className="px-4 py-6 text-center text-[#8E8E90]">
                      No schemes added yet.
                    </td>
                  </tr>
                ) : (
                  tablePageItems.map((scheme) => (
                    <tr key={scheme.id} className="text-[#084E75] text-sm">
                      <td className="px-4 py-2 text-[#084E75]">
                        {scheme.section_1_header || "Untitled scheme"}
                      </td>
                      <td className="px-4 py-2 text-[#8E8E90]">
                        {scheme.createdAt
                          ? new Date(scheme.createdAt).toLocaleDateString()
                          : "—"}
                      </td>
                      <td className="px-4 py-2 text-[#084E75]">
                        <button
                          type="button"
                          onClick={() => handleEdit(scheme)}
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
          {!schemesLoading ? (
            <TablePagination
              page={tablePage}
              totalPages={tableTotalPages}
              totalItems={tableTotal}
              pageSize={tablePageSize}
              onPageChange={setTablePage}
              onPageSizeChange={setTablePageSize}
            />
          ) : null}
        </section>
      </div>
    </>
  )
}

export default page