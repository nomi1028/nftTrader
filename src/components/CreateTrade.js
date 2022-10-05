import React from 'react'
import { Container, Button } from 'react-bootstrap'

const CreateTrade = () => {
  return (
    <div className='bg-yellow'>
      <div className='bg-blue bottom-radius'> 
        <Container fluid className='hub-trades'>
            <div className='hub-trades-left'>
                <p className='hub-trades-p1' style={{fontWeight :"600"}}>Your Hub & Trades</p>
                <p className='hub-trades-p2'>This is your personal Trade hub page. Here you can conveniently create deals, cancel them and update your Trader counterparty.</p>
            </div>
            <div className="hub-trades-right">
            <Button className='nft-button px-3' style={{fontWeight :"600"}}>Create Trade</Button>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default CreateTrade
