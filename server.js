/** Start server for Lunchly. */

const app = require("./app");

app.listen(3000, function() {
  console.log("listening on 3000");
});




// tell nodemon what extensions to watch with the - e flag.
// For this assignment, it’s worth telling it to listen for 
// changes to HTML, CSS, and Javascript, so you should start
// your server with the following command:

// $ nodemon - e js, html, css