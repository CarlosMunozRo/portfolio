'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import '../../assets/scss/components/layout/_header.scss'

export default function Header() {

    useEffect(() => {
        const header = document.querySelector('.header') as HTMLElement
        window.addEventListener('scroll', () => {
            if(header)
                if (window.scrollY > 0) {
                    header.classList.add('header--scroll')
                } else {
                    header.classList.remove('header--scroll')
                }
            
        })
    }, [])

    return (
        <header className="py-4 header">
            <div className="container mx-auto">
                <Image src="/next.svg" alt="Logo" width={150} height={150} />
            </div>
        </header>
    )
}
