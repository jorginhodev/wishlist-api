import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import productsHandler from './api/products.js';
import wishlistHandler from './api/wishlist.js';

const app = express();
const PORT = process.env.PORT || 3333;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsHandler);
app.use('/api/wishlist', wishlistHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
});
