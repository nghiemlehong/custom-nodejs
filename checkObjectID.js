const mongoose = require('mongoose');
const { MyError } = require('../models/my-error.model');

function checkObjectId(...ids) {
    try {
        ids.forEach(id => new mongoose.Types.ObjectId(id.toString()));
    } catch (error) {
        throw new MyError('INVALID_ID', 400);
    }
}

module.exports = { checkObjectId };