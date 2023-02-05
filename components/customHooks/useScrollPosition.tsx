import React, { useState, useEffect } from 'react'

export default function useScrollPosition() {
    const [scrollPosition, setScrollPostion] = useState<number>(0)
    useEffect(() => {
        const updatePosition = (): void => {
            setScrollPostion(window.pageYOffset)
        }
        window.addEventListener("scroll", updatePosition)
        updatePosition()
        return () => { window.removeEventListener("scroll", updatePosition) }
    }, [])
    return (
        scrollPosition
    )
}
