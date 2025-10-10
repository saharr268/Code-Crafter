import {
  editFaq,
  faqById,
  createFaq,
  getAllFaqs,
  removeFaq,
} from "../models/faqsModels.js";

export const getFaqs = async (req, res) => {
  try {
    const { pageNumber, pageSize, keyword } = req.query;

    const { faqData, totalCount, totalPages } = await getAllFaqs({
      pageNumber: parseInt(pageNumber) || 1,
      pageSize: parseInt(pageSize) || 5,
      keyword,
    });

    res.status(200).json({
      success: true,
      count: faqData?.length,
      totalCount,
      totalPages,
      data: faqData,
    });
  } catch (error) {
    console.error("Error fetching faqs:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getFaqById = async (req, res) => {
  const { id } = req.params;

  try {
    const faq = await faqById(id);
    if (!faq) {
      return res.status(404).json({ error: "Faq not found" });
    }
    res.json(faq);
  } catch (err) {
    console.log("Error fetching faq by id: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addFaq = async (req, res) => {
  const { title, descriptoin } = req.body;

  try {
    if (!title || !descriptoin) {
      return res.status(400).json({
        error: "title and description text are required",
      });
    }
    const newFaq = await createFaq({
      title,
      descriptoin,
    });
    res.status(201).json(newFaq);
  } catch (err) {
    console.log("Error creating faqs: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateFaq = async (req, res) => {
  const { id } = req.params;
  const { title, descriptoin } = req.body;
  try {
    const updated = await editFaq(id, {
      title,
      descriptoin,
    });

    if (!updated) {
      return res.status(404).json({ error: "faq Not Found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating faqs: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteFaq = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await removeFaq(id);

    if (!deleted) {
      return res.status(404).json({ error: "faq Not Found" });
    }

    res.json({ message: "faq deleted successfully", deleted });
  } catch (err) {
    console.log("Error deleting faqs", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
