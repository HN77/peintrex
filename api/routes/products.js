import express from 'express';
import asyncHander from '../middlewares/asyncHandler.js';
import Product from '../models/Product.js';
import { notFound } from '../errors/not-found.js';

const router = express.Router();

router.get(
  '/api/products/:id',
  asyncHander(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    } else {
      throw new notFound();
    }
  })
);

router.get(
  '/api/products',
  asyncHander(async (req, res) => {
    const products = await Product.find({});

    res.send(products);
  })
);

export { router as ProductsRouter };
