import {PrismaClient} from '@prisma/client';
import Link from 'next/link'

const prisma = new PrismaClient();

export const getServerSideProps = async(context) => {
  const post = await prisma.post.findFirst({
    where: {
      id: parseInt(context.params.id)
    }
  });
  console.log(post);
  return {
    props: {
      post
    }
  };
}

export default function Home({post}) {
  return (
    <ul className="">
      <li className="" key={post.id}>
        {post.title}
        <br />
        {post.id}
        <br />
        {post.excerpt}
        <br />
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </li>
  </ul>
  )
}
