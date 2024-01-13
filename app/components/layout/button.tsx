'use client'

import { useEffect, useRef } from "react"
import gsap from 'gsap'
import Link from "next/link";
import { log } from "console";


export default function Button(props: {link?: string, children: string} = {link: "#",children : "Button"}) {

    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            var btn = buttonRef.current as HTMLElement
            btn.addEventListener('mousemove', function(evt) {
            const movX = evt.clientX - this.getBoundingClientRect().x;
                gsap.to(btn.querySelectorAll(".button__spotlight"), {
                    x: movX,
                    scale: 30,
                    duration: 0.3
                })
            })

            btn.addEventListener('mouseleave', function(evt) {
                const movX = evt.clientX - this.getBoundingClientRect().x;
                gsap.to(btn.querySelectorAll(".button__spotlight"), {
                    x: movX,
                    scale: 0,
                    duration: 0.3
                })
            })
        }

    }, [])

    return(
        <Link href={props.link ? props.link : '#'}  className="button" ref={buttonRef}>
            <span className="button__spotlight"></span>
            <span className="button__wrapper">
                <span className="button__text">
                {props.children}
                </span>
            </span>
        </Link>
    )

}