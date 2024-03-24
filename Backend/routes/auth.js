const express = require('express');
const router = express.Router();
const User = require('../models/user')
const NgoS = require('../models/ngos')
const PS = require('../models/privateSector')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ngos = require('../models/ngos');
const fetchuser = require('../middleware/fetchuser');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;


// Route 1: route for the api with the route og localhost/api/auth/createuser
router.post('/createuser', async (req, res) => {
    let success = false;

    try {
        userEmail = (await User.find({ email: req.body.email })).length
        if (userEmail == 0) {
            let salt = bcrypt.genSaltSync(10);
            let securedPass = bcrypt.hashSync(req.body.password, salt);
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securedPass,
                dob: req.body.dob,
                qualification: req.body.qualification,
                address: req.body.address,
                job: req.body.job,
                role: "user"

            })

            const data = {
                user: {
                    id: user._id
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);

            success = true;
            res.json({ success, authtoken });
        } else {
            return res.status(400).json({ error: "Email Id already Exists" })
        }
    } catch (err) {
        res.status(500).send("Internal Server Error occured while Authennticating")
    }
})


// Route 2: route for the api with the route og localhost/api/auth/createNgo
router.post('/createNgo', async (req, res) => {
    let success = false;

    try {
        userEmail = (await NgoS.find({ email: req.body.email })).length
        if (userEmail == 0) {
            let salt = bcrypt.genSaltSync(10);
            let securedPass = bcrypt.hashSync(req.body.password, salt);
            const NgoUser = await NgoS.create({
                ngo_name: req.body.ngo_name,
                ngo_desc: req.body.ngo_desc,
                ngo_location: req.body.ngo_location,
                goal: req.body.goal,
                email: req.body.email,
                password: securedPass,
                role: "ngo",
                organizationalSize: req.body.organizationalSize,
                Declaration: req.body.Declaration,
                verified: false,
            })

            const data = {
                user: {
                    id: NgoUser._id,
                    role: NgoUser.role
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);

            success = true;
            res.json({ success, authtoken });
        } else {
            return res.status(400).json({ error: "Email Id already Exists" })
        }
    } catch (err) {
        res.status(500).send("Internal Server Error occured while Authennticating")
    }
})

// Route 2: route for the api with the route og localhost/api/auth/ ---> get all ngos
router.get('/', async (req, res) => {
    try {
        const unverifiedNGOs = await NgoS.find({ verified: false });
        res.json(unverifiedNGOs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error occurred while fetching unverified NGOs");
    }

})

router.get('/ps', async (req, res) => {
    try {
        const unverifiedPS = await NgoS.find({ verified: false });
        res.json(unverifiedPS);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error occurred while fetching unverified NGOs");
    }

})

// Route 2: route for the api with the route og localhost/api/auth/createNgo
router.post('/createPS', async (req, res) => {
    let success = false;

    try {
        userEmail = (await PS.find({ email: req.body.email })).length
        if (userEmail == 0) {
            let salt = bcrypt.genSaltSync(10);
            let securedPass = bcrypt.hashSync(req.body.password, salt);
            const PsUser = await PS.create({
                ps_name: req.body.ps_name,
                ps_location: req.body.ps_location,
                email: req.body.email,
                password: securedPass,
                role: "PS",
                organizationalSize: req.body.organizationalSize,
                verified: false,
            })

            const data = {
                user: {
                    id: PsUser._id,
                    role: PsUser.role
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);

            success = true;
            res.json({ success, authtoken });
        } else {
            return res.status(400).json({ error: "Email Id already Exists" })
        }
    } catch (err) {
        res.status(500).send("Internal Server Error occured while Authennticating")
    }
})

// Route 3: route for the api with the route og localhost/api/auth/login
router.post('/login', async (req, res) => {
    let success = false;

    try {
        const role = req.body.role;
        let user;
        if (role == "user" || role == "gov" || role == "sa") {
            user = await User.findOne({ email: req.body.email });
        }
        else if (role == "ngo") {
            user = await ngos.findOne({ email: req.body.email });
        }
        else {
            user = await PS.findOne({ email: req.body.email });
        }

        if (user) {
            const comparePass = bcrypt.compareSync(req.body.password, user.password);
            if (comparePass) {
                const data = {
                    user: {
                        id: user._id,
                        role: user.role
                    }
                }
                success = true;
                const authtoken = jwt.sign(data, JWT_SECRET);
                res.json({ success, authtoken });
            }
            else {
                return res.status(400).json({
                    error: "User does not Exists / Invalid Credentials"
                })
            }


        } else {
            return res.status(400).json({ error: "User does not Exists / Invalid Credentials" })
        }
    } catch (err) {
        res.status(500).send("Internal Server Error occured while Authennticating")
    }


})

// Route 4: route for the api with the route of localhost/api/auth/getuser with a MIDDLEWARE
router.get('/getuser', fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        const role = req.user.role;
        let userData;
        if (role == "user" || role == "gov" || role == "sa") {
            userData = await User.findById(userId).select("-password");
        }
        else if (role == "ngo") {
            userData = await ngos.findById(userId).select("-password");
        }
        else {
            userData = await PS.findById(userId).select("-password");
        }

        // const user = await User.findById(userId).select("-password");
        res.send(userData);
    } catch (err) {
        res.status(500).send("Internal Server Error occured while getting the user from JWT token || MiddleWare")
    }
})


router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { verified } = req.body; // Assuming you're sending verified status in the request body

    try {
        // Find the NGO record by ID
        const ngo = await NgoS.findById(id);
        if (!ngo) {
            return res.status(404).json({ message: 'NGO not found' });
        }

        // Update the verified status
        ngo.verified = verified; // Assuming verified is a boolean

        // Save the updated NGO record
        const updatedNgo = await ngo.save();

        res.json(updatedNgo); // Respond with the updated NGO record
    } catch (error) {
        console.error('Error updating NGO status:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;