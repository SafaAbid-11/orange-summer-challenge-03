const Product = require('../models/productModel');

exports.createProduct = (req, res, next) => {
    
        const product = new Product({
          ...req.body
        });
        product.save()
          .then(() => res.status(201).json({ message: 'Product saved successfully !'}))
          .catch(error => res.status(400).json({ error }));
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({
    _id: req.params.id
  }).then(
    (Product) => {
      res.status(200).json(Product);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyProduct = (req, res, next) => {
  
  Product.updateOne({_id: req.params.id}, {...req.body,_id: req.params.id}).then(
    () => {
      res.status(201).json({
        message: 'Product updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllProduct = (req, res, next) => {
  Product.find().then(
    (Products) => {
      res.status(200).json(Products);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};