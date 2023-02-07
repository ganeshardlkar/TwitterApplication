// const mongoose = require('mongoose');
import mongoose from "mongoose";

export const connect = async () => {
    await mongoose.connect('mongodb://localhost/Twitter_Dev');
}

// module.exports = connect;