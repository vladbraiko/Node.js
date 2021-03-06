const ContactDB = require("./contacts.model");

const getContactController = async (req, res, next) => {
  try {
    const contacts = await ContactDB.getContacts();
    res.json(contacts);
  } catch (e) {
    next(e);
  }
};

const createContactController = async (req, res, next) => {
  try {
    const { body } = req;
    const newContact = await ContactDB.createContact(body);
    res.status(201).json(newContact);
  } catch (e) {
    next(e);
  }
};

const updateContactController = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    const updatedContact = await ContactDB.updateContact(id, data);
    res.status(200).json(updatedContact);
  } catch (e) {
    next(e);
  }
};

const deleteContactController = async (req, res, next) => {
  try {
    const { contactID } = req.params;
    await ContactDB.deleteContact(contactID);
    res.end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getContactController,
  createContactController,
  updateContactController,
  deleteContactController,
};
