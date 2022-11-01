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
import CloseIcon from "@mui/icons-material/Close";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React, { useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "rgb(45 0 247)",
  borderRadius: "30px",

  boxShadow: 24,
  p: 4,
};

const CheckDeal = ({
  tableData,
  unixTime,
  Time,
  setValue,
  setShown,
  setDis,
}) => {
  const [modalState, setModalState] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalHandler = () => {
    setValue(true);
    setShown(true);
    setDis(true);
    setOpen(false);
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "white", textAlign: "center" }}
            >
              <strong> Go Back To Trade Hub?</strong>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: "20px !important",
                color: "white",
                textAlign: "center",
                width: "95%",
                margin: "auto",
              }}
            >
              You can return later as this deal will remain live until it hits
              expiration date
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "25px",
              }}
            >
              <Button
                sx={{
                  color: "white",
                  border: "1px solid white",
                  padding: "15px",
                  borderRadius: "30px",
                }}
                onClick={handleClose}
              >
                <strong> Dismiss</strong>
              </Button>
              <Button
                sx={{
                  color: "white",
                  border: "1px solid white",
                  padding: "15px",
                  borderRadius: "30px",
                }}
                onClick={modalHandler}
              >
                <strong> Go Back To Trade Hub?</strong>
              </Button>
            </Typography>
          </Box>
        </Modal>
      </div>
      <Typography
        sx={{
          backgroundColor: "blue",
          paddingX: "15px",
          paddingY: "20px",
          color: "white",
          // marginTop: "20px",
          // marginBottom: "80px",
          // position: "absolute",
          // top: "0px",
          // zIndex: "2",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          position: "fixed",
          width: "100%",
          zIndex: "1",
          top: "0",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ paddingX: "20px" }} onClick={handleOpen}>
              <CloseIcon
                sx={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
            </Typography>
            <Typography sx={{ fontSize: "1.225rem" }}>
              <strong>Check Your Assets</strong>
            </Typography>
          </Typography>

          <Typography
            sx={{
              background: "white",
              color: "blue",
              paddingY: "15px",
              paddingX: "25px",
              borderRadius: "30px",
            }}
          >
            {" "}
            <Typography sx={{ fontSize: ".9rem" }}>
              <strong>Cancel Deal</strong>
            </Typography>
          </Typography>
        </Typography>
      </Typography>

      {/* <Modal
        show={true}
        // onHide={() => setWalletInfo(false)}
        // contentClassName="modalPosition"
        style={{ display: "flex", alignItems: "center" }}
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
      </Modal> */}

      <Grid
        container
        md={12}
        lg={12}
        // sx={{ marginBottom: "50px" }}
        sx={{ marginTop: "120px", marginBottom: "50px" }}
        // display={"flex"}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          sx={{ paddingX: "40px", paddingY: "20px" }}
        >
          <Grid item md={2} sm={2} lg={2}>
            <Typography
              sx={{
                display: "flex",

                alignItems: "center",
                gap: "20px",
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
                <Typography sx={{ fontSize: ".75rem" }}>
                  <strong>Your Wallet</strong>
                </Typography>
                <Typography sx={{ fontSize: ".75rem", color: "gray" }}>
                  {tableData?.actorData?.AdminWallet.slice(0, 9)}
                  ...
                  {tableData?.actorData?.AdminWallet.slice(32, 42)}
                </Typography>
              </Typography>
            </Typography>
          </Grid>

          <Grid item md={8} sm={8} lg={8}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
                margin: "auto",
              }}
            >
              <Typography
                sx={{ color: "blue", fontWeight: "700", fontSize: "1.125rem" }}
              >
                <strong>What You Are Trading</strong>
              </Typography>

              {/* <Typography sx={{ textAlign: "center" }}>OUT</Typography> */}
              <Avatar sx={{ bgcolor: "blue", fontSize: "15px" }}>
                <strong>OUT</strong>
              </Avatar>
              {/* </Typography> */}
              <Typography variant="body2">
                <SyncAltIcon sx={{ width: "40px", height: "40px" }} />
              </Typography>
              {/* <Typography
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
              </Typography> */}
              <Avatar sx={{ bgcolor: "blue", fontSize: "15px" }}>
                <strong>IN</strong>
              </Avatar>
              <Typography
                sx={{ color: "blue", fontWeight: "700", fontSize: "1.125rem" }}
              >
                <strong>What You Will Receive</strong>
              </Typography>
            </Typography>
            <Typography sx={{ marginTop: "40px", marginBottom: "20px" }}>
              <Typography
                sx={{
                  paddingY: "13px",
                  // paddingX: "5px",
                  borderRadius: "30px",
                  border: "1px solid blue",
                  color: "black",
                  width: "30%",
                  margin: "auto",
                  fontSize: "14px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: ".875rem",
                    fontWeight: "semibold",
                  }}
                >
                  {unixTime ? (
                    <>
                      <strong>
                        {unixTime * 1000 > Date.now()
                          ? "This Trade will expire"
                          : "Expired"}
                      </strong>

                      <strong> {moment.unix(unixTime).fromNow()}</strong>
                    </>
                  ) : (
                    "Not Started yet"
                  )}
                </Typography>
              </Typography>
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: ".75rem",
                color: "gray",
              }}
            >
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
          <Grid item md={2} sm={2} lg={2}>
            <Typography
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                justifyContent: "end",
                gap: "20px",
              }}
            >
              <Typography>
                <Typography sx={{ fontSize: ".75rem", color: "gray" }}>
                  {" "}
                  <strong sx={{ fontWeight: "400" }}>
                    {" "}
                    {"<"}username not set{">"}
                  </strong>
                </Typography>
                <Typography sx={{ fontSize: ".75rem", color: "gray" }}>
                  {tableData?.actorData?.Nftadress.slice(0, 10)}
                  ...
                  {tableData?.actorData?.Nftadress.slice(32, 42)}
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
      <Grid container md={12} lg={12}>
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
            <Typography sx={{ padding: "40px", marginBottom: "80px" }}>
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
                    src={tableData?.actorData?.takerImageURL}
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
                {tableData?.actorData?.Eth} ETH
              </Typography>
            </Typography>
            <Typography sx={{ padding: "40px", marginBottom: "80px" }}>
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
                    src={tableData?.actorData?.makerImageURL}
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
