import {PrismaClient} from '@prisma/client';
import Link from 'next/link'

const prisma = new PrismaClient();

export const getServerSideProps = async(context) => {
  const data = await prisma.post.findFirst({
    where: {
      id: parseInt(context.params.id)
    }
  });
  console.log(data);
  return {
    props: {
      post: data
    }
  };
}

export default function Home({post}) {
  return (
    <div> 
      <Link href="/blog">
          <a className="cursor-pointer underline">Back to Blog</a>
      </Link>
      <br/>
      <br/>
      <ul className="">
        <li className="" key={post.id}>
          Title: {post.title}
          <br />
          Excerpt: {post.excerpt}
          <br />
        </li>
      </ul>
    </div>
  )
}
