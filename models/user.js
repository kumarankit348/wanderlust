const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

//"passport-local-mongoose" will automatically generate "username" and "password"
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

//to implement username, password, hashing & salting automatically also add some useful method to our schema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
