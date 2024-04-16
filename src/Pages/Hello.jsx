import React from 'react'
import { Link } from 'react-router-dom'

const Hello = () => {

    var a="Rijo"

  return (
    <>
    <div>Hello</div>
    <Link to={`/hai/${a}`}>connect to hai</Link>
    </>
  )
}

export default Hello