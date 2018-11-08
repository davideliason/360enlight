const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise
const bcrypt = require('bcryptjs');

// Define userSchema
const userSchema = new Schema({

	username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false }

})

userSchema.methods = {
    checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
    hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
    }
  }

  userSchema.pre('save', function (next) {
    if (!this.password) {
      console.log('A password is required')
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
      this.password = this.hashPassword(this.password)
      next()
    }
  })

const User = mongoose.model('User', userSchema)
module.exports = User