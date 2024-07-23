const express = require('express')
const { signUp, getOne, getAll, updateUser, loginUser, verifyEmail, resendVerificationEmail, forgotPassword, changePassword, resetPassword, deleteUser, signUp2 } = require('../controller/userController')
const upload = require('../utils/multer.js')
const router = express.Router()


router.post('/sign-up', upload.array('photos', 10), signUp)

router.post(`/log-in`, loginUser)

router.get(`/verify/:token`, verifyEmail)

router.post(`/resend-verification`, resendVerificationEmail)

router.post(`/forgot-password`, forgotPassword)

router.post(`/change-password/:token`, changePassword)

router.post(`/reset-password/:token`, resetPassword)

router.get('/one/:id', getOne)

router.get('/all', getAll)

router.put('/update/:id', upload.array('photos', 10), updateUser)

router.delete(`/delete/:id`, deleteUser)

module.exports = router;