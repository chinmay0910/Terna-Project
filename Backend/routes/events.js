const express = require('express');
const router = express.Router();
const Event = require('../models/events');
const fetchuser = require('../middleware/fetchuser');
const user = require('../models/user');
const multer = require('multer');
const { uploadImageToCloudinary } = require('../utils/imageUpload');

// Multer storage and upload configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 } // Adjust the file size limit as needed (10MB in this example)
});

// Route to add a new event
router.post('/addEvents', upload.single('image'), fetchuser, async (req, res) => {
    const { title, description, date, location, goal, collabators } = req.body;
    // const file = req.file;
    const userId = req.user.id;
    const userData = await user.findById(userId);
    const userDepartment = userData.ngo_name;
    // console.log(req.body);
    try {
    //   if (!file) {
    //     return res.status(401).json({ success: false, msg: "Enter valid file" });
    //   }
  
    //   const imageUrl = await uploadImageToCloudinary(file);
  
      const newEvent = new Event({
        title,
        description,
        date: date,
        location,
        image: imageUrl,
        tag: keywords,   
        link,
        department: userDepartment
      });
  
  
  
      const event = await newEvent.save();
      res.status(201).json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  