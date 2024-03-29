const User = require("../models/user-model");
const Contact = require("../models/contact-model")

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({},{password:0});
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "admin error" });
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({},{password:0});
        console.log(contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        return res.status(500).json({ message: "admin error" });
    }
};

module.exports = {getAllUsers,getAllContacts};