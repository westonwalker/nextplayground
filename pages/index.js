import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/test`}>
        <a>Go to Test</a>
      </Link>
      <br/>
      <br/>
      {!session && <>
        Not signed in <br/>
        <button onClick={() => signIn()}  className="cursor-pointer underline">Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <Link href={`/blog`}>
          <a className="cursor-pointer underline">Go to Blog</a>
        </Link>
        <button onClick={() => signOut()}  className="cursor-pointer underline">Sign out</button>
      </>}
  </div>
  )
}
