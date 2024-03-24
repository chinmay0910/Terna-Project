const express = require('express');
const router = express.Router();
const Event = require('../models/events');
const fetchuser = require('../middleware/fetchuser');
const user = require('../models/user');
const multer = require('multer');
const { uploadImageToCloudinary } = require('../utils/imageUpload');
const ngos = require('../models/ngos');

// Multer storage and upload configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 } // Adjust the file size limit as needed (10MB in this example)
});

// Route to add a new event
router.post('/addEvents', upload.single('image'), fetchuser, async (req, res) => {
  const { title, description, date, location, goal, actions, collaborators } = req.body;
  const image = req.file;

  try {

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload image to Cloudinary
    const imageUrl = await uploadImageToCloudinary(req.file);

    // Create new event with image URL
    const newEvent = new Event({
      title,
      description,
      date,
      location,
      image: imageUrl,
      goal,
      collaborators,
      registeredBy: req.user.id
    });
    console.log(newEvent);

    // Save event to database
    const event = await newEvent.save();
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/getallevents', async (req, res) => {
  try {
    // Query the database to find all NGOs
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/getalleventsbyid', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    // Query the database to find all NGOs
    const events = await Event.find({registeredBy: userId});
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/:eventId/rsvp', fetchuser, async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const userId = req.user.id; // Assuming user ID is available in request

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.collaborators.includes(userId)) {
      return res.status(400).json({ message: 'User already registered for this event' });
    }

    event.collaborators.push(userId);
    await event.save();

    res.status(200).json({ message: 'RSVP successful' });
  } catch (error) {
    console.error('Error RSVPing to event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/getallNgos', async (req, res) => {
  try {
    // Query the database to find all NGOs
    const ngosData = await ngos.find().select("-password");
    res.json(ngosData);
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to add action to the events
router.post('/:eventId', async (req, res) => {
  const { eventId } = req.params;
  const { heading, description } = req.body;

  try {
      // Validate input data
      if (!heading || !description) {
          return res.status(400).json({ message: 'Heading and description are required' });
      }

      // Find the event by ID
      const event = await Event.findById(eventId);
      if (!event) {
          return res.status(404).json({ message: 'Event not found' });
      }

      // Add action to the event
      event.actions.push({ heading, description });
      await event.save();

      res.status(201).json({ message: 'Action added successfully', event });
  } catch (error) {
      console.error('Error adding action to event:', error);
      res.status(500).json({ message: 'Server Error' });
  }
});
  

module.exports = router;