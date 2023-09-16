const {mongoose} = require('../config/mongoDbConfig.js'); // Import your database connection
const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
    roomName: String,
    sender: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;
