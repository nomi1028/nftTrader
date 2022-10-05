import React from 'react'
import collectionAray2 from './traderNoArray';
const TraderNo = () => {
  return (
   <>
    <>
      {collectionAray2.map((props) => {
        return (
          <>
            <div className="d-flex justify-content-between p-3">
              <div className="title2" style={{color: 'rgb(12, 10, 65)',  fontWeight:"600"}}>{props.title}</div>
              <div className="title2" style={{color:"#3e39e6", fontSize: "1.875rem", fontWeight:"600"}}>{props.no}</div>
            </div>
          </>
        );
      })}
    </>
   </>
  )
}

export default TraderNo
