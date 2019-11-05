require("dotenv").config({ path: "variables.env" });

const app = require("./app");

// Start our app!
app.set("port", process.env.PORT || 1978);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
