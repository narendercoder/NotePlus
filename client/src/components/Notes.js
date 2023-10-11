import React from 'react'
import Card from './Card'

const Notes = () => {
  return (
    <div className='relative max-w-[784px]'>
    <div className='flex justify-center w-full h-full'>
      <div className='flex justify-between items-center'>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
    </div>
  )
}

export default Notes