const express = require("express");

const app = express();

app.get("/health", (req, res) => res.end({message: "OK!"}));

console.log('created server');
app.listen(3000, () => console.info('Server is running'));