const http =  require("http");
const app = require("./app");
const socketIo = require("socket.io");
const ChatMessage = require("./models/chatModel.js");

const server = http.createServer(app);
const io = socketIo(server);

const rooms = new Map();
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Handle user disconnects
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
        // Leave all rooms when a user disconnects
        rooms.forEach((participants, roomName) => {
            if (participants.has(socket.id)) {
                participants.delete(socket.id);
                io.to(roomName).emit('user left', socket.id);
            }
        });
    });

    // Modify the 'join room' event handler
    socket.on('join room', (roomName) => {
        // Create the room if it doesn't exist
        if (!rooms.has(roomName)) {
            rooms.set(roomName, new Set());
        }
        // Join the room
        socket.join(roomName);
        rooms.get(roomName).add(socket.id);

        // Retrieve and emit chat messages for this room
        ChatMessage.find({ roomName })
            .sort({ timestamp: 1 }) // Sort messages by timestamp in ascending order
            .exec((err, messages) => {
                if (err) {
                    console.error('Error retrieving chat messages:', err);
                } else {
                    // Emit the chat messages to the client
                    socket.emit('chat history', messages);
                }
            });
    });


    // Handle incoming chat messages
    socket.on('chat message', (data) => {
        const { roomName, message } = data;
        const chatMessage = new ChatMessage({
            roomName,
            sender: socket.id, // You can replace this with user authentication data
            message,
        });

        chatMessage.save((err) => {
            if (err) {
                console.error('Error saving message:', err);
            } else {
                // Broadcast the message to all users in the room
                io.to(roomName).emit('chat message', {
                    id: socket.id,
                    message: data.message,
                });
            }
        });
    });
});

module.exports = server;