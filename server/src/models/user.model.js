// User model
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    lastName: {
        type: String,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    avatar: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})
userSchema.pre('save', async function (next) {
    try {
       if (this.isNew) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
      }
      next()
    } catch (err) {
      next(err)
    }
  })
  
  userSchema.methods.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password)
    } catch (error) {
      throw error
    }
  }


const User = mongoose.model("User", userSchema);
module.exports = User;