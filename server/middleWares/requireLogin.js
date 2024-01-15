import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../keys/key.js';
import mongoose from 'mongoose';
const User = mongoose.model("User");

const requireLogin = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" });
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in" });
        }

        const { _id } = payload;

        User.findById(_id).then(userdata => {
            req.user = userdata;
            next();
        });
    });
};

export default requireLogin;
