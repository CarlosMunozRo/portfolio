'use client'

import gsap from 'gsap'
import SplitType from 'split-type'
import { useEffect } from 'react'
import Button from './components/layout/button'

export default function Home() {
  
  useEffect(() => {
    var text = new SplitType('.text-effect',{ types: 'words,lines' })

    gsap.to(text.words, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      stagger: {
        amount: .9,
      }
    })

    window.addEventListener('resize', () => {
      text.revert()
      text = new SplitType('.text-effect',{ types: 'words,lines' })
      gsap.set(text.words, {opacity: 1,y: 0})
    })

  }, [])

  return (
    <main className='container mx-auto'>
      
      <div className='flex hero min-h-svh items-center'><div className='flex-1'>
          <h1 className='text-effect'>Esto es un test</h1>
          <p className='text-effect mb-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ex ad voluptatum, esse cumque impedit eaque suscipit excepturi provident. Laboriosam molestias, vel sint natus iusto consequatur commodi cumque perspiciatis quaerat.
            Quaerat, vitae sunt praesentium architecto quibusdam voluptas quam suscipit vel eos consequatur numquam accusamus veniam consequuntur nesciunt incidunt eaque tempora! Est voluptates error sint ipsum, animi cumque minus quisquam? Laborum.
          </p>
          <Button link="/test">Ver Proyectos</Button>
          <Button link="/test">dada</Button>
        </div>
        <div className='flex-1'>
        </div>
      </div>
    </main>
  )
}


