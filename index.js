const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
var bodyParser = require('body-parser'); 


const options = {
  info: {
    version: '1.0.0',
    title: 'Testing Testing',
    license: {
      name: 'MIT',
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v3/api-docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
  // multiple option in case you want more that one instance
  multiple: true,
}


const app = express();
app.use(express.json());

expressJSDocSwagger(app)(options);

const port = 3000;

const db = require("./models/sequelize.js");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


  require("./routes/vocab.routes.js")(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


module.exports =app;