import React from "react";
import collectionAray from "./array";
const Colection = () => {
  return (
    <>
      {collectionAray.map((props) => {
        return (
          <>
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex align-items-center gap-3" style={{color: 'rgb(12, 10, 65)', fontWeight:"600"}}>
              <div className="collection_img_div rounded-circle"></div>
                <div className="title"> {props.title}</div>
              </div>
              <div className="title2" style={{color:"#3e39e6", fontSize: "1.875rem", fontWeight:"600"}}>{props.eth}</div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Colection;
