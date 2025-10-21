// const jwt = require('jsonwebtoken')
// const User = require('../models/User')



// const protect = async(req, res, next) => {
//     let token; 
//     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')
//          ) {
            
//         try {
//             token = req.headers.authorization.split(" ")[1]
//             const decoded = jwt.verify(token, process.env.JWT_SECRET)
            


//             req.user = await User.findById(decoded.user.id).select('-password')  //Exclude password
//             next();
//         } catch (error) {
//             console.log('Token verification failed!:', error);
//             res.status(401).json({message: "Token Failed, Not authorized"})
            
//         }

//     }else {
//         res.status(401).json({ message: "Not authorized, no token provided"})
//     }
// }  

// module.exports = { protect }


const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "No token found" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user.id).select("-password");

      next();
    } catch (error) {
      console.error("Token verification failed:", error.message);
      return res.status(401).json({ message: "Token failed, not authorized" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = { protect };