import React from 'react'
import Link from 'next/Link'

export default function navbar() {
    return (
        <div>
            <ul>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
    </ul>
        </div>
    )
}
