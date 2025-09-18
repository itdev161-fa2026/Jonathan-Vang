// server.js
const { check, validationResult } = require('express-validator');
const express = require('express');
const app = express();

app.use(express.json());

app.post(
  '/api/users',
  [
    check('name').trim().notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Please include a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // bad input -> 422 + list of issues
      return res.status(422).json({ errors: errors.array() });
    }
    // good input -> echo back (you’re not saving to DB yet)
    return res.status(200).json(req.body);
  }
);

