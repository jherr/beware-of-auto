const express = require("express");

express()
  .get("/api/nav", (req, res) => {
    res.json([
      { title: "Home", url: "/" },
      { title: "About", url: "/about" },
      { title: "Contact", url: "/contact" },
    ]);
  })
  .get("/api/time", (req, res) => {
    res.json({ time: new Date().toTimeString() });
  })
  .listen(8080, () =>
    console.log("Server running on port http://localhost:8080")
  );
