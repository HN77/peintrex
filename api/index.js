import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler.js';
import { ProductsRouter } from './routes/products.js';
import { userRouter } from './routes/users.js';
import { orderRouter } from './routes/order.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Home Page');
});

// MIDDLEWARE ROUTER
app.use(ProductsRouter);
app.use(userRouter);
app.use(orderRouter);
// ERROR MIDDLEWARE
app.use(errorHandler);

// DB CONNECTION
connectDB();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Serve at ${`http://localhost:${port}`}`);
});
