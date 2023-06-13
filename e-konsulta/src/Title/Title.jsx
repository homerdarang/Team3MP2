import React from 'react'

export default function Title({ text }) {
  return (
    <h1 className='subtitle text-center txt-primary'>
      {!text ? "Treatments & Services" : text}
    </h1>
  )
}
