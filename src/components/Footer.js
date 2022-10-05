import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='bg-blue' style={{fontWeight :"600"}}>
      <Container fluid className='footer'>
        <p>
            Solana labs Inc. &copy; 2022
        </p>
        <div className='footer-right'>
            <div>Privacy Policy</div><span className="dot-span">&#8226; </span>
            <div>Audit Report</div><span className="dot-span">&#8226; </span>
            <div>Terms of Servce</div>
        </div>
      </Container>
    </div>
  )
}

export default Footer