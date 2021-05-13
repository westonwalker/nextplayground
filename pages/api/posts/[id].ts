import { PrismaClient, Post } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const post: Post = await prisma.post.findFirst({
    where: {
      id: parseInt(req.query.id)
    },
    include: {
      author: true
    }
  });
  console.log(post);
  res.json(post);
}
