import React from "react";
import collectionAray from "./array";
import vimg from "../../assets/images/verified.svg";
const Colection = () => {
  return (
    <>
      {collectionAray.map((props) => {
        return (
          <>
            <div className="d-flex justify-content-between align-items-center p-3">
              <div
                className="d-flex align-items-center gap-6"
                style={{ color: "rgb(12, 10, 65)", fontWeight: "600" }}
              >
                <div className=" rounded-circle me-4">
                  <img
                    className="collection_img_div rounded-circle "
                    width="100px"
                    height="100px"
                    src={props.img}
                    alt="image"
                  />
                  <img
                    className="mt-4"
                    style={{ marginLeft: "-1rem" }}
                    src={vimg}
                    alt="image"
                  />
                </div>
                <div className="titlet"> {props.title}</div>
              </div>
              <div
                className="title2"
                style={{
                  color: "#3e39e6",
                  fontSize: "1.875rem",
                  fontWeight: "600",
                }}
              >
                {props.eth}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Colection;
