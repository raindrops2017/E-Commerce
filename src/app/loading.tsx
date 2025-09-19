import React from 'react'
import { ImSpinner } from 'react-icons/im'

export default function Loading() {
  return <>
  <div className='min-h-screen animate-spin text-9xl flex justify-center items-center'>
    <ImSpinner />

  </div>
  </>
}
