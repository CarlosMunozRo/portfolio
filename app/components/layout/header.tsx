import Image from 'next/image'
import '../../assets/scss/components/layout/_header.scss'


export default function Header() {
    return (
        <header className="py-4 header">
            <div className="container mx-auto">
                <Image src="/next.svg" alt="Logo" width={150} height={150} />
            </div>
        </header>
    )
}
  