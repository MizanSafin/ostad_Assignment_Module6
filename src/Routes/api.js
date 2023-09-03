const express = require("express");
const Router = express.Router();

//Import router Controller Methods :
const blogController = require("../Controllers/blogController");
const blogDetailsController = require("../Controllers/blogDetailsController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const portfolioController = require("../Controllers/portfolioController");
const productController = require("../Controllers/productController");
const profitController = require("../Controllers/profitController");
const projectController = require("../Controllers/projectController");
const serviceController = require("../Controllers/serviceController");
const titleController = require("../Controllers/titleController");

//blogController Router path :
Router.get("/blogRead", blogController.read);
Router.get("/blogCreate", blogController.create);
Router.get("/blogDelete", blogController.delete);
Router.get("/blogUpdate", blogController.update);

//blogDetailsController router path :
Router.get("/blogDetailsRead", blogDetailsController.read);
Router.get("/blogDetailsCreate", blogDetailsController.create);
Router.get("/blogDetailsDelete", blogDetailsController.delete);
Router.get("/blogDetailsUpdate", blogDetailsController.update);

// commentController router path::
Router.get("/commentCreate", commentController.create);
Router.get("/commentRead", commentController.read);
Router.get("/commentDelete", commentController.delete);
Router.get("/commentUpdate", commentController.update);

// messageController router path::

Router.get("/messageCreate", messageController.create);
Router.get("/messageRead", messageController.read);
Router.get("/messageDelete", messageController.delete);
Router.get("/messageUpdate", messageController.update);

// portfolioController router path::

Router.get("/portfolioCreate", portfolioController.create);
Router.get("/portfolioRead", portfolioController.read);
Router.get("/portfolioDelete", portfolioController.delete);
Router.get("/portfolioUpdate", portfolioController.update);

// productController router path::
Router.get("/productCreate", productController.create);
Router.get("/productRead", productController.read);
Router.get("/productDelete", productController.delete);
Router.get("/productUpdate", productController.update);

// profitController router path::
Router.get("/profitCreate", profitController.create);
Router.get("/profitRead", profitController.read);
Router.get("/profitDelete", profitController.delete);
Router.get("/profitUpdate", profitController.update);

// projectController router path::
Router.get("/projectCreate", projectController.create);
Router.get("/projectRead", projectController.read);
Router.get("/projectDelete", projectController.delete);
Router.get("/projectUpdate", projectController.update);

// serviceController router path::
Router.get("/serviceCreate", serviceController.create);
Router.get("/serviceRead", serviceController.read);
Router.get("/serviceDelete", serviceController.delete);
Router.get("/serviceUpdate", serviceController.update);

// titleController router path::
Router.get("/titleCreate", titleController.create);
Router.get("/titleRead", titleController.read);
Router.get("/titleDelete", titleController.delete);
Router.get("/titleUpdate", titleController.update);

//exports Module :
module.exports = Router;
