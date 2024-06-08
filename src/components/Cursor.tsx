import { useState } from 'react'

export default function Cursor() {
  const [x, setX] = useState<number | null>(null)
  const [y, setY] = useState<number | null>(null)

  function onPointerMove(event: React.PointerEvent) {
    setX(event.clientX)
    setY(event.clientY)
  }

  function onPointerOut() {}
}
