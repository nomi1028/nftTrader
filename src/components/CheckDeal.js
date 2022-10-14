import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React, { useState } from "react";
import moment from "moment";
import Modal from "react-bootstrap/Modal";

const CheckDeal = ({ tableData, unixTime, Time }) => {
  const [modalState, setModalState] = useState(false);
  const modalHandler = () => {
    setModalState(true);
  };

  return (
    <>
      <Typography
        sx={{
          backgroundColor: "blue",
          padding: "15px",
          color: "white",
          marginTop: "20px",
          marginBottom: "20px",
          // position: "absolute",
          // top: "0px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ display: "flex" }}>
            <Typography
              sx={{ paddingX: "20px" }}
              onClick={() => modalHandler()}
            >
              Close
            </Typography>
            <Typography>Check Your Assets</Typography>
          </Typography>

          <Typography
            sx={{
              background: "white",
              color: "blue",
              padding: "15px",
              borderRadius: "30px",
            }}
          >
            {" "}
            <Typography>Cancel Deal</Typography>
          </Typography>
        </Typography>
      </Typography>
      <Modal
        show={false}
        // onHide={() => setWalletInfo(false)}
        // contentClassName="modalPosition"
        // sx={{ position: "relative", right: "0", top: "20" }}
      >
        <Modal.Header className="">
          <Modal.Title>Go Back To Trade Hub?</Modal.Title>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography sx={{ display: "flex" }}>
            {" "}
            <Button sx={{ padding: "20px" }}>Dismiss</Button>
            <Button className="disconnect">Go back to trade hub</Button>
          </Typography>
        </Modal.Body>
      </Modal>

      <Grid
        container
        md={12}
        lg={12}
        sx={{ marginBottom: "50px" }}
        // display={"flex"}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          <Grid item md={3} sm={3} lg={3}>
            <Typography
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>
                <Avatar
                  //   sx={{ width: "25px", height: "25px" }}
                  alt="Remy Sharp"
                  src="/favicon-32x32.png"
                />
              </Typography>
              <Typography>
                <Typography>Your Wallet</Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  {tableData?.actorData?.AdminWallet}
                </Typography>
              </Typography>
            </Typography>
          </Grid>

          <Grid item md={6} sm={6} lg={6}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
                margin: "auto",
              }}
            >
              <Typography sx={{ color: "blue", fontWeight: "bold" }}>
                What You Are Trading
              </Typography>
              <Typography
                sx={{
                  padding: "5px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "30px",
                  width: "46px",
                  height: "46px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>OUT</Typography>
              </Typography>
              <Typography variant="body2">
                <CompareArrowsIcon />
              </Typography>
              <Typography
                sx={{
                  padding: "5px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "30px",
                  width: "46px",
                  height: "46px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>IN</Typography>
              </Typography>
              <Typography sx={{ color: "blue", fontWeight: "bold" }}>
                What You Will Receive
              </Typography>
            </Typography>
            <Typography sx={{ marginTop: "20px", marginBottom: "20px" }}>
              <Typography
                sx={{
                  padding: "15px",
                  borderRadius: "30px",
                  border: "1px solid blue",
                  color: "black",
                  width: "40%",
                  margin: "auto",
                }}
              >
                <Typography sx={{ textAlign: "center", color: "blue" }}>
                  {unixTime ? (
                    <>
                      {unixTime * 1000 > Date.now()
                        ? " This Trade will expire "
                        : "Expired"}
                      <Typography sx={{ fontWeight: "bold" }}>
                        {" "}
                        {moment.unix(unixTime).fromNow()}
                      </Typography>
                    </>
                  ) : (
                    "Not Started yet"
                  )}
                </Typography>
              </Typography>
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {unixTime ? (
                <>
                  {unixTime * 1000 > Date.now() ? " Expire Date" : "Expired on"}
                  {/* :{Time} */}:{moment(Time).format("MMMM DD,YYYY")}
                  {/* :{Time} */}
                </>
              ) : (
                "Not Started yet"
              )}
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} lg={3}>
            <Typography
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Typography>
                <Typography>
                  {" "}
                  {"<"}username not set{">"}
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  {tableData?.actorData?.Coinname}
                </Typography>
              </Typography>
              <Typography>
                <Avatar
                  //   sx={{ width: "25px", height: "25px" }}
                  alt="Remy Sharp"
                  src="/favicon-32x32.png"
                />
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        md={12}
        lg={12}
        // display={"flex"}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          <Grid item md={5.5} sm={5.5} lg={5.5}>
            <Typography
              sx={{
                padding: "10px",
                borderRadius: "30px",
                // border: "2px solid black",
                backgroundColor: "#F5F5F5",
              }}
            >
              <Typography
                sx={{
                  padding: "10px",
                  borderRadius: "30px",
                  //   border: "2px so",
                  width: "30%",
                  backgroundColor: "white",
                }}
              >
                1 NFT
              </Typography>
            </Typography>
            <Typography sx={{ padding: "40px" }}>
              <Card sx={{ maxWidth: 170, borderRadius: "20px" }}>
                <Typography sx={{ padding: "10px" }}>
                  <CardMedia
                    style={{ borderRadius: "20px" }}
                    component="img"
                    alt={tableData?.actorData?.takerImageURL}
                    height="140"
                    image={tableData?.actorData?.takerImageURL}
                  />
                </Typography>

                {tableData ? (
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {tableData?.actorData?.Tokenname}
                    </Typography>
                  </CardContent>
                ) : null}
                <CardActions>
                  <Avatar
                    sx={{ width: "25px", height: "25px" }}
                    alt="Remy Sharp"
                    // src="https://lh3.googleusercontent.com/FIUUEPmmfgkjsHFZgcamA41h-mGW3rr_DqNq1ZsHzLKH9tUuYuCVRM8AHchOkLhr4OwtX1519oYBKg82GES9zHZ1kY-6T30BwjOuOA=s250"
                    src={tableData?.actorData?.NftIcon}
                  />
                  <Button size="small">
                    {tableData?.actorData?.Tokenname}
                  </Button>
                </CardActions>
              </Card>
            </Typography>
          </Grid>
          <Grid item md={1} sm={1} lg={1}>
            <Divider
              style={{
                width: 1,
                height: "100%",
                backgroundColor: "gray",
                margin: "auto",
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          </Grid>

          <Grid item md={5.5} sm={5.5} lg={5.5}>
            <Typography
              sx={{
                padding: "10px",
                borderRadius: "30px",
                // border: "2px solid",
                backgroundColor: "#F5F5F5",
              }}
            >
              <Typography
                sx={{
                  padding: "10px",
                  borderRadius: "30px",
                  //   border: "2px solid black",
                  width: "30%",
                  backgroundColor: "white",
                }}
              >
                1.0 ETH
              </Typography>
            </Typography>
            <Typography sx={{ padding: "40px" }}>
              <Card sx={{ maxWidth: 170, borderRadius: "20px" }}>
                <Typography sx={{ padding: "10px" }}>
                  <CardMedia
                    style={{ borderRadius: "20px" }}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={tableData?.actorData?.makerImageURL}
                  />
                </Typography>

                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    {tableData?.actorData?.nftnname}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Avatar
                    sx={{ width: "25px", height: "25px" }}
                    alt="Remy Sharp"
                    // src="https://lh3.googleusercontent.com/FIUUEPmmfgkjsHFZgcamA41h-mGW3rr_DqNq1ZsHzLKH9tUuYuCVRM8AHchOkLhr4OwtX1519oYBKg82GES9zHZ1kY-6T30BwjOuOA=s250"
                    src={tableData?.actorData?.ClientIcon}
                  />
                  <Button size="small">{tableData?.actorData?.nftnname}</Button>
                </CardActions>
              </Card>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckDeal;
