const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const db = require("../config/db"); // db connection pool
const { sendNotification } = require("../utils/sendNotification");

const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID; 
const client = new OAuth2Client(CLIENT_ID);

// User login 
router.post("/login", async (req, res) => {

  const { token } = req.body; 

  try {

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID, 
    });
    const payload = ticket.getPayload();
    console.log(payload)
    const userEmail = payload.email;
    console.log(userEmail)

    // JWT token
    const jwttoken = jwt.sign(
      { email: userEmail },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // 1 hour token expiry time
    );

    // Send notification email on login
    // await sendNotification(user.email, 'logged in'); 

    res.status(200).json({ message: "Login successful", jwttoken });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
});

// User logout 
router.post("/logout", async (req, res) => {
  
  await sendNotification(user.email, 'logged out'); 
  res.status(200).json({ message: "Successfully logged out" });

});

module.exports = router;
