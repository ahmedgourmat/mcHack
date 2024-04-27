const Session = require('../models/SessionModel');
const User = require('../models/UserModel');

const createSession = async (req, res) => {
    try {

        const { title, description, users } = req.body;

        // Validate that users array contains valid user IDs
        const validUserIds = users.map(user => user.userId);
        const usersExist = await User.find({ _id: { $in: validUserIds } });
        if (usersExist.length !== validUserIds.length) {
            return res.status(400).json({ error: 'One or more users do not exist' });
        }

        // Create session with provided data
        let session = await Session.create({
            title,
            description,
            users,
            category: [req.user._id]
        });

        // Populate the 'users' array in the created session with user data (excluding password)
        session = await session.populate({ path: 'users.usersId', select: '-password' });

        res.status(201).json(session);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getSessions = async (req, res) => {

    const sessions = req.query.search ? {
        $or: [
            { title: { $regex: req.query.search, $options: 'i' } }
        ]
    } : {};


    try {

        const data = await Session.find(sessions)

        res.status(200).json(data)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    createSession,
    getSessions
};
