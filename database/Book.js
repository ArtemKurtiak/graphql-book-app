const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

module.exports = model('book', BookSchema);
