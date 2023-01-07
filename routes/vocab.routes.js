module.exports = app => {
    const vocab = require("../controllers/vocab.controller.js");
  
    var router = require("express").Router();
  
    router.post("/create", vocab.create);
  
    router.get("/findAll", vocab.findAll);
  
    router.get("/published", vocab.findAllPublished);
  
    router.get("/:id", vocab.findOne);
  
    router.put("/:id", vocab.update);
  
    router.delete("/:id", vocab.delete);
  
    router.delete("/", vocab.deleteAll);
  
    app.use('/api/vocab', router);
  };