'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="text-lg font-semibold hover:text-primary/80 transition-colors">
          Take Home
        </Link>
      </div>
    </nav>
  )
}
