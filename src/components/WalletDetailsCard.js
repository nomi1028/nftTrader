import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import CheckDeal from "./CheckDeal";
import CreateTrade from "./CreateTrade";
import moment from "moment";

const WalletDetailsCard = ({ setShown }) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  console.log(account, "accountsss");
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState();
  const [value, setValue] = useState(true);
  const [unixTime, setUnixTime] = useState();
  const [Time, setTime] = useState();
  const handler = () => {
    setValue(false);
    setShown(false);
  };

  //   const [timeLeft, settimeLeft] = useState(false);
  //   setInterval(() => {
  //     if (timeLeft === false) {
  //       settimeLeft(true);
  //     } else {
  //       settimeLeft(false);
  //     }
  //   }, 3000);

  //   let time = new Date();
  const getdata = () => {
    console.log("gggggggggggggggg");
    axios
      // .get(`http://localhost:5000/student/stud/${account.toString()}`)
      .get(
        `https://nfttrader1.herokuapp.com/student/stud/${account.toString()}`
      )

      .then((res) => {
        console.log(res.data, "ggggggaaaaaaaaaaaaaaaaggggggggg");
        const persons = res.data;
        if (persons?.actorData) {
          setTableData(persons);
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    if (account) {
      getdata();
    }
  }, [account]);
  useEffect(() => {
    if (tableData) {
      console.log("qwer");
      const dateStr = tableData?.actorData?.time;
      setTime(dateStr);
      console.log(moment(dateStr).unix(), "dateStr");
      setUnixTime(moment(dateStr).unix());
      // const [dateComponents, timeComponents] = dateStr.split(" ");
      // console.log(dateComponents, "dateComponents"); // 👉️ "09/24/2022"
      // console.log(timeComponents); // 👉️ "09:25:32"
      // const [month, day, year] = dateComponents.split("/");
      // const [hours, minutes, seconds] = timeComponents.split(":");
      // const date = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
      // console.log(date); // 👉️ Sat Sep 24 2022 09:25:32
      // const unixTimestamp = Math.floor(date.getTime() / 1000);
      // console.log(unixTimestamp, "unixTimestamp");
    }
  }, [tableData]);

  return loading ? (
    <h1></h1>
  ) : (
    <>
      {value ? (
        <>
          <CreateTrade />
          <Container
            fluid
            style={{ maxWidth: "1280px" }}
            className="WalletDetailsCard"
          >
            <div className="activetrades-top d-flex justify-content-between align-items-center">
              <p>Active Trades</p>
              <Image src="/reload.svg" style={{ height: "100%" }}></Image>
            </div>
            <div className="trades-swap">
              <Row className="trades-swap-row align-items-center">
                <Col lg={2} md={2} sm={12} xs={12}>
                  <Row className="align-items-center justify-content-evenly trade-swaps">
                    <Col sm={3} xs={3}>
                      <Image src={tableData?.actorData?.takerImageURL}></Image>
                    </Col>
                    <Col sm={1} xs={1}>
                      {tableData?.actorData?.NftIcontrade ? (
                        <Image
                          // src="/profile.png"
                          src={tableData?.actorData?.NftIcontrade}
                          style={{ width: "20px" }}
                        ></Image>
                      ) : (
                        <Image
                          // src="/profile.png"
                          src="/Group 60173.png"
                          style={{ width: "20px" }}
                        ></Image>
                      )}
                    </Col>
                    <Col sm={3} xs={3}>
                      <Image src="/arrows.svg"></Image>
                    </Col>

                    <Col sm={1} xs={1}>
                      {tableData?.actorData?.ClientIcontrade ? (
                        <Image
                          src={tableData?.actorData?.ClientIcon}
                          style={{ width: "20px" }}
                        ></Image>
                      ) : (
                        <Image
                          // src="/profile.png"
                          src="/Group 60174.png"
                          style={{ width: "20px" }}
                        ></Image>
                      )}
                    </Col>
                    <Col sm={3} xs={3}>
                      <Image src={tableData?.actorData?.makerImageURL}></Image>
                    </Col>
                  </Row>
                </Col>
                <Col lg={1} md={1} sm={0}></Col>
                <Col lg={5} md={5} sm={12} xs={12}>
                  <Row className="align-items-center justify-content-evenly trade-swap-from">
                    <Col sm={1} xs={2}>
                      <p style={{ fontFamily: "Rubik" }}>from :</p>
                    </Col>
                    <Col sm={1} xs={1}>
                      <Image
                        // src="/profile.png"
                        // src={tableData?.actorData?.NftIcontrade}
                        src="/Group 60174.png"
                        style={{ width: "25px" }}
                      ></Image>
                    </Col>
                    <Col sm={4} xs={4}>
                      <p className="trade-swap-p">
                        {"<"}username not set{">"}
                      </p>
                    </Col>
                    <Col sm={4} xs={4}>
                      <Button>
                        {unixTime ? (
                          <>
                            {unixTime * 1000 > Date.now()
                              ? " Expire will be "
                              : "Expired"}
                            {moment.unix(unixTime).fromNow()}
                          </>
                        ) : (
                          "Not Started yet"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Col>
                {tableData ? (
                  <Col
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    className="d-flex justify-content-end rm-flex-end"
                  >
                    <Row className="trade-check-deal justify-content-end">
                      <Col>
                        <Button onClick={handler}>
                          Check Deal
                          <Image src="eye.svg" height={"20px"}></Image>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                ) : null}
              </Row>
            </div>
          </Container>
        </>
      ) : (
        <>
          {tableData && (
            <CheckDeal tableData={tableData} unixTime={unixTime} Time={Time} />
          )}
        </>
      )}
    </>
  );
};

export default WalletDetailsCard;
