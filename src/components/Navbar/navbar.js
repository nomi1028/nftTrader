import React, { useState } from "react";
import { Button, NavLink, Dropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";
import MetaMask from "../../assets/metaMask.svg";
import CoinbaseWallet from "../../assets/coinbaseWallet.svg";
import WalletConnect from "../../assets/walletConnect.svg";
import Unstoppable from "../../assets/unstoppable.png";
import Modal from "react-bootstrap/Modal";
const Navbar = ({ connectWallet }) => {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

    if (address) {
      const match = address.match(
        /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
      );
      if (!match) return address;
      setAddress(`${match[1]}…${match[2]}`);
    }
  };
  return (
    <>
      <nav className="navbar text-white fixed-top mw-100">
        <div class="container-fluid">
          <img width="190px" src={logo} alt="" />

          <div className="d-flex align-items-center">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                className="bg-transparent border-0"
                id="dropdown-autoclose-true"
              >
                Trading Center
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  <Link to="/Mytrades">Your Hub & Trades </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <Link to="#">Global Deals </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <Link to="#">Your To Trade </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <Link to="#">Trade Squad NFT </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                className="bg-transparent border-0"
                id="dropdown-autoclose-true"
              >
                More
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="d-flex gap-2" role="search">
            <Button
              className="text-primary bg-white rounded-pill  nav-btn "
              variant="outline-primary"
            >
              Buy Crypto
            </Button>
            {address ? (
              <div>{address}</div>
            ) : (
              <Button
                className="text-primary bg-white rounded-pill  nav-btn"
                variant="outline-primary"
                onClick={handleShow}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </nav>

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
            </div>{" "}
            Unstoppable Domains
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
