const express = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()


// @route POST /api/users/register
// @desc Rgeister a user
// @access public
router.post('/register', async(req, res) => {
const {name, email, password} = req.body

try {
    let user = await User.findOne({ email })
    if(user) return res.status(400).json({ message: "User already exist"})
     
    user = new User({name, email, password})
    await user.save() 
   
    // create jwt payload 
   const payload = { user: { id: user._id, role: user.role}}
  //  sign in ad return the token along with the user  
   jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '40h'}, (err, next) => {
    if(err) throw err

    // send user and tooken in response 
    res.status(201).json({
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        token
    })
   })
} catch (error) {
    console.log(error);
    res.status(500).send('server Error')
    
}
})


// @route Post api/users/login
// @desc authenticate user 
// // @access public 
// router.post('/login', async (req, res) => {
//     const {email, password} = req.body 

//     try {
//         let user = await User.findOne({email})
//     if(!user) return res.status(400).json({message: "Inavlid Credentials"})

//      const isMatch = await user.matchPassword(password)   
//      if(!isMatch) return res.status(400).json({message: "Invalid Password"})

//     // Create JWT token
//     const payload = { user: {id: user._id, role: user.role}}

//     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h"}, (err, token) => {
//        if(err) throw err
       
//        res.json({
//         user: {
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             role: user.role,
//         },
//         token
//        })
//     }) 
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Server Error")
        
        
//     }
//    })


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const payload = { user: { id: user.id, role: user.role } };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" }, (err, token) => {
      if (err) throw err;
      res.json({
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/users/profile 
// @desc get logged-in users Profiler(protected routes)
// @access private
router.get('/profile', protect, async (req, res) => {
    res.json(req.user)
})



module.exports = router
