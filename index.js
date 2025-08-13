const express = require("express");

const app = express();

app.get("/health", (req, res) => res.end({message: "OK!"}));

console.log('hello')
app.listen(3000, () => console.info('Server is running'));