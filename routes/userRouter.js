const express=require('express')
const { loginController, registerController,authController } = require('../controllers/userCtlr')
const authMiddleware = require('../middlewares/authMiddleware')



// router object
const router=express.Router()
// Login||POST
router.post('/login',loginController)

// REGISTER||POST
router.post('/register',registerController)

// Home Auth||POST
router.post('/getRegData', authMiddleware, authController)
module.exports=router