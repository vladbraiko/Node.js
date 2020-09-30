const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "Name",
      unique: true,
    },
    email: {
      type: String,
      required: true,
      validate: (value) => value.includes("@"),
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      default: "phone number",
      unique: true,
    },
    subscription: {
      type: String,
      default: "free",
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

class Contact {
  constructor() {
    this.db = mongoose.model("Contacts", contactsSchema);
  }

  getContacts = async () => {
    return await this.db.find();
  };

  createContact = async () => {
    return await this.db.create(contactData);
  };

  updateContact = async (contactId, contactData) => {
    return await this.db.findByIdAndUpdate(contactId, contactData, {
      new: true,
    });
  };

  deleteContact = async (contactId) => {
    return await this.db.findByIdAndRemove(contactId);
  };
}

module.exports = new Contact();
