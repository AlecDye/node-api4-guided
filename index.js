const server = require("./api/server.js");

// Goal: Make port dynamic, so that heroku can assign one
// const port = 5000;
// use dynamic port OR localhost 5000 (for devs)
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
