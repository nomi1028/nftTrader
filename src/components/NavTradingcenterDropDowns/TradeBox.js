import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import verified from "../../assets/images/verified.png";
import metaMask from "../../assets/metaMask.svg";
import walletConnect from "../../assets/walletConnect.svg";
import coinbaseWallet from "../../assets/coinbaseWallet.svg";
import unstoppable from "../../assets/unstoppable.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "#2D00F7",
  display: "flex",
 
  justifyContent: "center",
  flexDirection: "column",
  color: "white",
  alignItems: "center",

  p: 4,
};

const TradeBox = () => {
  return (
    <Box borderRadius="30px" sx={style}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        fontWeight="bold"
        component="h2"
      >
        <CloseIcon fontSize="large" />
      </Typography>

      <Typography fontSize="20px" id="modal-modal-description" sx={{ p: 3 }}>
        Connect Your Wallet
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: "50px",
          p: 1,
          mb: 2,
          bgcolor: "white",
          color: "0000FF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "90%",
          }}
        >
          <img width="50" height="50" src={metaMask} alt="img" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",

              marginLeft: "30px",
            }}
          >
            <Typography
              variant="body"
              fontWeight="bold"
              fontFamily="museomoderno"
              fontSize="20px"
              color="#360CF6"
            >
              MetaMask
            </Typography>
            <Typography variant="body">Connect your wallet to trade</Typography>
          </Box>
        </Box>
      </Button>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: "50px",
          p: 1,
          mb: 2,
          bgcolor: "white",
          color: "0000FF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "90%",
          }}
        >
          <img width="50" height="50" src={walletConnect} alt="img" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",

              marginLeft: "30px",
            }}
          >
            <Typography
              variant="body"
              fontWeight="bold"
              fontFamily="museomoderno"
              fontSize="20px"
              color="#360CF6"
            >
              WalletConnect
            </Typography>
            <Typography variant="body">
              Scan with your mobile wallete
            </Typography>
          </Box>
        </Box>
      </Button>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: "50px",
          p: 1,
          mb: 2,
          bgcolor: "white",
          color: "0000FF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "90%",
          }}
        >
          <img width="50" height="50" src={coinbaseWallet} alt="img" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",

              marginLeft: "30px",
            }}
          >
            <Typography
              variant="body"
              fontWeight="bold"
              fontFamily="museomoderno"
              fontSize="20px"
              color="#360CF6"
            >
              CoinBase Wallet
            </Typography>
            <Typography variant="body">Connect your mobile wallet</Typography>
          </Box>
        </Box>
      </Button>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: "50px",
          p: 1,
          mb: 2,
          bgcolor: "white",
          color: "0000FF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "90%",
          }}
        >
          <img width="50" height="50" src={unstoppable} alt="img" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",

              marginLeft: "30px",
            }}
          >
            <Typography
              variant="body"
              fontWeight="bold"
              fontFamily="museomoderno"
              fontSize="20px"
              color="#360CF6"
            >
              Unstopable Domains
            </Typography>
            <Typography variant="body">Login with Your Domain</Typography>
          </Box>
        </Box>
      </Button>
    </Box>
  );
};

export default TradeBox;
