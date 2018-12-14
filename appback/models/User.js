const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema (
  {

    email:{
      type: String,
      required: true,
      unique:true
    },
    
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
)


userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model('User', userSchema);

