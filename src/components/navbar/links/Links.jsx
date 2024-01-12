import Link from 'next/link'
import React from 'react'

const Links = () => {
    const links = [
        {title: "Homepage",
        path: "/",
    },
        {title: "About",
        path: "/about",
    },
        {title: "Contact",
        path: "/contact",
    },
        {title: "Blog",
        path: "/blog",
    },
        {title: "Login",
        path: "/login",
    },
        {title: "Register",
        path: "/register",
    },
    
    ]
  return (
    <div>
        {links.map((link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        )))}
    </div>
  )
}

export default Links