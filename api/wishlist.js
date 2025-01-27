import { PrismaClient } from '@prisma/client';
import Cors from 'cors';

const prisma = new PrismaClient();
const cors = Cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  try {
    if (req.method === 'GET') {
      const wishlist = await prisma.wishlist.findMany({
        include: { product: true },
      });
      return res.status(200).json(wishlist);
    }

    if (req.method === 'POST') {
      const { code } = req.body;
      if (!code) {
        return res.status(400).send('Código do produto é necessário.');
      }
      await prisma.wishlist.create({
        data: { productCode: code },
      });
      return res.status(201).send('Produto adicionado à wishlist.');
    }

    if (req.method === 'DELETE') {
      const { productCode } = req.query;

      if (!productCode) {
        return res.status(400).json({
          error: 'Código do produto não fornecido'
        });
      }

      const deleteResult = await prisma.wishlist.deleteMany({
        where: {
          productCode
        },
      });

      if (deleteResult.count === 0) {
        return res.status(404).json({
          error: 'Produto não encontrado na wishlist'
        });
      }

      return res.status(200).send('Produto removido da wishlist.');
    }

    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
