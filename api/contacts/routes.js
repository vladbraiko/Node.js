const { Router } = require("express");

const {
  getContactController,
  createContactController,
  updateContactController,
  deleteContactController,
} = require("./contacts.controller");

const contactsRouter = Router();

contactsRouter.get("/", getContactController);

contactsRouter.post("/", createContactController);

contactsRouter.patch("/", updateContactController);

contactsRouter.delete("/:contactId", deleteContactController);

// contactsRouter.get("/:contactId", async (req, res) => {
//   const contactId = Number(req.params.contactId);
//   const contact = await Contacts.getContactById(contactId);
//   if (!contact) res.status(404).json({ message: "Not found" });
//   res.status(200).json(contact);
//   return;
// });

// contactsRouter.post("/", async (req, res) => {
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone)
//     return res.status(400).json({ message: "missing required name field" });
//   const newContact = await Contacts.addContact(name, email, phone);
//   res.status(201).json(newContact);
// });

// contactsRouter.delete("/:contactId", async (req, res) => {
//   const id = Number(req.params.contactId);
//   const contact = await Contacts.getContactById(id);
//   if (!contact) return res.status(404).json({ message: "Not found" });

//   await Contacts.removeContact(id);
//   res.status(200).json({ message: "contact deleted" });
//   return;
// });

// contactsRouter.patch("/:contactId", async (req, res) => {
//   const { body } = req;
//   if (!body) return res.status(400).json({ message: "missing field" });

//   const id = Number(req.params.contactId);
//   const contact = await Contacts.getContactById(id);
//   if (!contact) return res.status(404).json({ message: "Not found" });

//   const updatedContact = await Contacts.updateContact(id, body);

//   res.status(200).json(updatedContact);
// });

module.exports = contactsRouter;
