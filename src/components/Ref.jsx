import React from 'react'
import { useRef } from 'react'
export default function Ref() {
    const name = useRef('')

  return (
    <div>
      <input type='text' ref={name} />
    </div>
  )
}
