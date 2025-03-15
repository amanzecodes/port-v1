import React from 'react'

const navItems = [
    {
        href: '#hero',
        label: 'Home'
    },
    {
        href: '#project',
        label: 'Projects'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#faqs',
        label: 'Faqs'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
]

const Footer = () => {
  return (
    <footer className='bg-stone-900 text-white'>
        <div className='mx-auto px-2'>
            <div className='py-24 md:py-32 lg:py-40'>
            <div className='flex items-center gap-3'>
                <div className='size-3 rounded-full bg-green-400'></div>
                <span>Available for work</span>
                </div>
            <h2 className='text-4xl mt-8 font-extralight'>Enough Talk. Let's Make something great together.</h2>
            <nav>
                {navItems.map(({ href, label }) => (
                    <a href={href} key={label}>
                        {label}
                    </a>
                ))}
            </nav>
            </div>
            <p className='py-16'>Copyright &copy; Amanze Bruno &bull; All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer