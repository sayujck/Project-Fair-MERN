import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-1 fw-bold text-warning">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-center">Sorry we couldn't find that page</p>
        <Link to={'/'} className="btn btn-primary mt-3">Go to Home</Link>
      </div>
    </>
  )
}

export default Pnf