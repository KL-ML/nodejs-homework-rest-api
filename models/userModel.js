const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSubscrEnum = require('../constants/userSubscrEnum');

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: Object.values(userSubscrEnum),
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
},
{ versionKey: false, timestamps: true }
);

// Pre save hook // create save
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  
  next();
});

// Custom method
userSchema.methods.checkPassword = (candidate, hash) => bcrypt.compare(candidate, hash);

const User = mongoose.model('User', userSchema);

module.exports = User;