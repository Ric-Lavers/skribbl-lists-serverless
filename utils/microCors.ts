const cors = require("micro-cors")((req, res, ...args) => {
  if (req.method === "OPTIONS") {
    res.status(200);
    res.send();
    return;
  }
});

export default cors;
