const app = require("./index.js");

const port = process.env.PORT;

app.listen(port, () => {
    console.log("app is listening")
});