import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();
const productManager = new ProductManager('products.json');

app.get('/products', (req, res) => {
  const limit = parseInt(req.query.limit);
  const products = productManager.getAllProducts();

  if (limit > 0) {
    const limitedProducts = products.slice(0, limit);
    res.json(limitedProducts);
  } else {
    res.json(products);
  }

});

app.get('/products/:pid', (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = productManager.getProductById(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'No hay stock' });
  }
});

app.listen(8080, () => {
  console.log('puerto 8080 running');
});
