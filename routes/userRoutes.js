const express = require('express');
const checkAuth = require('./../middlewares/checkAuth')
const {
    createUser,
    loginUser,
    getProfile,
    logoutUser,
    getUsers,
    checkLoggedIn,
    getUser
} = require('./../controllers/users')

const router = express.Router()

router.post('/register',createUser);
router.post('/login',loginUser);
router.get('/checkloggedin',checkLoggedIn);
router.get('/logout',logoutUser)
router.post('/profile',checkAuth,getProfile)
router.get('/users',getUsers)
router.get('/user/:id',getUser)


module.exports= router;