// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db'); // Import the connection module

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
 connectDB(); // Call the function to connect to MongoDB

// Define a simple schema and model for demonstration purposes
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    role: String,
    status: { type: String, default: 'Pending' }
});

const UserModel = mongoose.model('User', UserSchema);

// Sample route to add a user
app.post('/users', async (req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.send(newUser);
});

// Sample route to get all users
app.get('/users', async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
});

// Start server on port 5000
app.listen(5000, () => console.log('Server running on port 5000'));
