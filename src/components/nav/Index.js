import React, { useEffect, useState } from "react";
import Style from "./Style";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/logo.svg";
import MetaMask from "../../assets/metaMask.svg";
import CoinbaseWallet from "../../assets/coinbaseWallet.svg";
import WalletConnect from "../../assets/walletConnect.svg";
import Wallet from "../../assets/wallet.svg";
import Unstoppable from "../../assets/unstoppable.png";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/connector";
import { Typography } from "@mui/material";

const Index = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [show, setShow] = useState(false);
  const [walletInfo, setWalletInfo] = useState(false);
  const [address, setAddress] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(account, "account");
  const hideInfo = () => {
    setWalletInfo("false");
  };
  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }
  useEffect(() => {
    connect();
  }, []);

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }
  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      alert("Metamask is not installed");
    }
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const address = accounts[0];
    // setShow(false);
    console.log(address, "walletadress");
    if (address) {
      setShow(false);
      const match = address.match(
        /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
      );
      if (!match) return address;
      setAddress(`${match[1]}…${match[2]}`);
    }
  };

  return (
    <Style>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img width="190px" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_class">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Trading center" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Mytrades">
                  Your Hubs & Trades
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Global Deals
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  How To Trade
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  TradeSquad NFT
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">SDK</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {account ? (
                <>
                  <div
                    className="rounded-pill address_bar"
                    variant="outline-primary"
                  >
                    <div className="icon rounded-pill">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        height="32"
                        width="32"
                      >
                        <rect
                          x="0"
                          y="0"
                          rx="0"
                          ry="0"
                          height="32"
                          width="32"
                          transform="translate(3.1602487871877405 6.466544689491581) rotate(225.5 16 16)"
                          fill="#fc3d00"
                        ></rect>
                        <rect
                          x="0"
                          y="0"
                          rx="0"
                          ry="0"
                          height="32"
                          width="32"
                          transform="translate(-8.301731641348697 15.364445614061914) rotate(144.1 16 16)"
                          fill="#f38c00"
                        ></rect>
                        <rect
                          x="0"
                          y="0"
                          rx="0"
                          ry="0"
                          height="32"
                          width="32"
                          transform="translate(13.91005781928204 -18.739658659816975) rotate(318.0 16 16)"
                          fill="#018c71"
                        ></rect>
                        <rect
                          x="0"
                          y="0"
                          rx="0"
                          ry="0"
                          height="32"
                          width="32"
                          transform="translate(10.082927498103224 37.44236705287915) rotate(239.0 16 16)"
                          fill="#f16702"
                        ></rect>
                      </svg>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="username">Username is not set</div>
                      <div className="address"> {account?.slice(0, 19)}</div>
                    </div>
                  </div>
                  &nbsp; &nbsp;
                  <Button
                    className="rounded-pill bg-white WalletButon "
                    onClick={() => setWalletInfo("true")}
                  >
                    <img src={Wallet} alt="Wallet Icon" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className="text-primary bg-white rounded-pill  nav-btn "
                    variant="outline-primary"
                  >
                    Buy Crypto
                  </Button>
                  {account && (
                    <Typography
                      sx={{
                        padding: "5px",
                        border: "2px solid white",
                        // backgroundColor: "white",
                        borderRadius: "25px",
                        color: "white",
                      }}
                    >
                      <Typography sx={{ fontSize: "10px" }}>
                        {account?.slice(0, 19)}
                      </Typography>
                    </Typography>
                  )}
                  {account ? null : (
                    <Button
                      className="text-primary bg-white rounded-pill  nav-btn"
                      variant="outline-primary"
                      // onClick={handleShow}
                      onClick={connect}
                    >
                      Connect Wallet
                    </Button>
                  )}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={walletInfo}
        onHide={() => setWalletInfo(false)}
        // contentClassName="modalPosition"
        sx={{ position: "relative", right: "0", top: "20" }}
      >
        <Modal.Header className="border-bottom text-right display-4">
          <Modal.Title>Connected Wallet address</Modal.Title>
          <Modal.Title>{account?.slice(0, 19)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Balance</h6>
          <div className="d-flex">
            <div>
              <p>0.0 ETH</p>
              <p>$0.00 USD</p>
            </div>
            <div>
              <img />
            </div>
          </div>
          <button className="buyCrypto ">Buy Crypto</button>
          <button onClick={disconnect} className="disconnect">
            Disconnect
          </button>
        </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleClose} className="align-items-center">
        <Modal.Header closeButton>
          <Modal.Title>Connect your Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button
            onClick={connectMetamask}
            className="metamask-btn rounded-pill"
          >
            <div className="metamask-btn-logo">
              <img src={MetaMask} />
            </div>
            Connect Metamask
          </button>
          <button className="metamask-btn rounded-pill">
            <div className="metamask-btn-logo">
              <img src={WalletConnect} />
            </div>
            Connect Wallet
          </button>
          <button className="metamask-btn rounded-pill">
            <div className="metamask-btn-logo">
              <img src={CoinbaseWallet} />
            </div>
            Coinbase Wallet
          </button>
          <button className="metamask-btn rounded-pill">
            <div className="metamask-btn-logo">
              <img src={Unstoppable} />
            </div>
            Unstoppable Domains
          </button>
        </Modal.Body>
      </Modal>
    </Style>
  );
};

export default Index;
