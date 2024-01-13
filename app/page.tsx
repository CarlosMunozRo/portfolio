import Image from 'next/image'
import CanvasHeader from './components/pages/page/canvasHeader'

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className='flex hero min-h-svh pt-[4rem] items-center'>
        <div className='flex-1'>
          <h1>Esto es un test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ex ad voluptatum, esse cumque impedit eaque suscipit excepturi provident. Laboriosam molestias, vel sint natus iusto consequatur commodi cumque perspiciatis quaerat.
            Quaerat, vitae sunt praesentium architecto quibusdam voluptas quam suscipit vel eos consequatur numquam accusamus veniam consequuntur nesciunt incidunt eaque tempora! Est voluptates error sint ipsum, animi cumque minus quisquam? Laborum.
          </p>
        </div>
        <div className='flex-1'>
          <CanvasHeader />
        </div>
      </div>
    </main>
  )
}
