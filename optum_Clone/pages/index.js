import Link from 'next/link';
import { useEffect } from 'react';
import {useRouter} from 'next/router'
export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    router.push("who-we-are/buisness/optum")
  })
  return (
    <>
    <Link href='who-we-are/buisness/optum'>
      <a style={{fontSize:"2rem", display:"block",textAlign:"center"}}>Go to the optum page</a>
    </Link>
    </>
  )

}
