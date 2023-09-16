const { createClient } = require("redis");

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect();

client.on("connect", () => console.log("Redis Client Connected"));

module.exports = client;
