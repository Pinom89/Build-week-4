import '../style/NotFound.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Container className='content'>
      <h1 className='text-dark'>4🤯4</h1>
      <h4 className='text-dark'>Opps! Page not found</h4>
      <p className='text-dark'>Siamo spiacenti, la pagina che stai cercando non esiste.</p>
      <Link to='/' className='btn_back'>Vai a Home</Link>
    </Container>
  )
}
