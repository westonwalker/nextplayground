import Head from 'next/head';
import Image from 'next/image';
//import {PrismaClient} from '@prisma/client';
import Link from 'next/link' 

export default function Test() {
  return (
    <Link href="/">
      <a>Back to home</a>
    </Link>
  )
}
