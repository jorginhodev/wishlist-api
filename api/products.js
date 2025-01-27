import { PrismaClient } from '@prisma/client';
import Cors from 'cors';

const prisma = new PrismaClient();
const cors = Cors({
  methods: ['GET'],
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

  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    res.status(200).json({
      total: products.length,
      pageSize: products.length,
      totalPages: 1,
      products,
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
