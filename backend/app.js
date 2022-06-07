const express = require('express');
const mongoose = require('mongoose');
const authRoutes=require('./src/routes/auth');
const productRoutes=require('./src/routes/product');
const productModel = require('./src/models/productModel');
const userModel = require('./src/models/userModel');

mongoose.connect('mongodb+srv://SafaAbid:jeaimemaman@cluster0.5fnyt.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
const app = express();
app.use(express.json());// intercepte toutes les requetes de content type json et met le corp de la requete dans req.body (bodyparser)

  
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use('/api/user',authRoutes);
  app.use('/api/product', productRoutes);

module.exports = app;