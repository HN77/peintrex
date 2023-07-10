import express from 'express';
import { protect, isAdmin } from '../middlewares/authMiddleware.js';
import asyncHander from '../middlewares/asyncHandler.js';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

const router = express.Router();

// @desc Sign Up user
// @route POST /api/users/signup
// @access Public/User
router.post(
  '/api/users/signup',
  asyncHander(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      generateToken(res, user._id);

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  })
);
// @desc Sign In user
// @route POST /api/users/signin
// @access Public/User
router.post(
  '/api/users/signin',
  asyncHander(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isSeller: user.isSeller,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  })
);

// @desc Signout user / Clear Cookie
// @route POST /api/users/signout
// @access Public/User
router.post(
  '/api/users/signout',
  asyncHander(async (req, res) => {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'Logged out successfuly' });
  })
);
////////////////////////////////////////////////////////////
// @desc Get user
// @route GET /api/users/:id
// @access Private/Admin
router.get(
  '/api/users/:id',
  asyncHander(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  })
);

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
router.get(
  '/api/users',
  protect,
  isAdmin,
  asyncHander(async (req, res) => {
    const users = await User.find({});

    if (users) {
      res.json(users);
    } else {
      res.status(404);
      throw new Error('Users not found');
    }
  })
);
// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin
router.put(
  '/api/users/update/:id',
  asyncHander(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isSeller = req.body.isSeller || user.isSeller;
      user.isAdmin = req.body.isAdmin || user.isAdmin;

      const updatedUser = await user.save();

      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isSeller: updatedUser.isSeller,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  })
);

// @desc Update user
// @route DELETE /api/users/:id
// @access Private/Admin
router.delete(
  '/api/users/delete/:id',
  asyncHander(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      await user.remove();
      res.json({ message: 'User removed' });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  })
);

// @desc Get user profile
// @route GET /api/users/profile
// @access Private/User
router.get(
  '/api/user/profile',
  protect,
  asyncHander(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isSeller: user.isSeller,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  })
);

// @desc Update user
// @route PUT /api/users/profile/update
// @access Private/User
router.put(
  '/api/users/profile/edit',
  protect,
  asyncHander(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isSeller: updatedUser.isSeller,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  })
);

export { router as userRouter };

// right a test
// const user = await User.findById(req.user._id);
// user.name = req.body.name || user.name;
