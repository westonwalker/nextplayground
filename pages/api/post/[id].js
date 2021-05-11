import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const post = await prisma.post.findFirst({
    where: {
      id: parseInt(req.query.id)
    }
  });
  res.json(post);
}
