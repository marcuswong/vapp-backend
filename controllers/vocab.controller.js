const db = require("../models/sequelize.js");
const vocab = db.vocab;

const Op = db.Sequelize.Op;

/**
 * A vocab
 * @typedef {object} Vocab
 * @property {string} title.required - The title
 * @property {string} description - The description
 * @property {string} remark - remark
 */

/**
 * Post /api/vocab/create
 * @summary create
 * @param {Vocab} request.body.required - Vocab info - application/json
 * @return {object} 200 - success response
 */exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Title can not be empty!"
      });
      return;
    }
  
    // Create a Vocab
    const vocab1 = {
      title: req.body.title,
      description: req.body.description,
      remark: req.body.remark
    };
  
    // Save Tutorial in the database
    vocab.create(vocab1)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
};

/**
 * GET /api/vocab/findAll
 * @summary Find all
 * @param string title.query
 * @return {object} 200 - success response
 */
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    vocab.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};