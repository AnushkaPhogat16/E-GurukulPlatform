import ClassModel from "../models/class.js";

// Host a class
export const hostClass = async (req, res) => {
  const { subject, link } = req.body;

  try {
    const newClass = new ClassModel({ subject, link });
    await newClass.save();
    res.status(201).json({ message: "Class hosted successfully!", class: newClass });
  } catch (error) {
    res.status(500).json({ message: "Error hosting class", error });
  }
};

// Fetch all classes
export const getClass = async (req, res) => {
  try {
    const classes = await ClassModel.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching classes", error });
  }
};
