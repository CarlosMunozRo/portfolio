'use client'

import { useEffect } from "react"


export default function CanvasHeader() {

    useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d')

        console.log(ctx);

    }, [])

    return (
        <canvas className='w-full h-full' id='canvas'></canvas>
    )
}
