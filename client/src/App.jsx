import { useEffect, useState } from 'react'
import './App.css'
import { address } from '../address'

function App() {

  async function fetchApi() {
    const response = await fetch(`${address}`)
    const result = await response.json()
    console.log(result)
  }

  useEffect(() =>{
    fetchApi()
  },[])

  return (
    <>
        <h1 className='text-3xl'>GrindStone</h1>
    </>
  )
}

export default App
