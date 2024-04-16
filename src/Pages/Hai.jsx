import React from 'react'
import { useParams } from 'react-router-dom'

const Hai = () => {

    const data=useParams()

    console.log("data",data.ok);

  return (
    <div>Hai</div>
  )
}

export default Hai