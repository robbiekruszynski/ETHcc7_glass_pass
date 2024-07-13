import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "YOUR_INFURA_PROJECT_ID" // Replace with your Infura project ID
    }
  }
};

const Header = () => {
  const [account, setAccount] = useState(null);
  const [web3Modal, setWeb3Modal] = useState(null);

  useEffect(() => {
    const initWeb3Modal = () => {
      const web3ModalInstance = new Web3Modal({
        cacheProvider: true,
        providerOptions
      });
      setWeb3Modal(web3ModalInstance);
    };
    initWeb3Modal();
  }, []);

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const account = await signer.getAddress();
      setAccount(account);
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  const disconnectWallet = async () => {
    web3Modal.clearCachedProvider();
    setAccount(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TicketSwap Clone
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {account ? (
          <>
            <Typography variant="body1" component="div">
              {account}
            </Typography>
            <Button color="inherit" onClick={disconnectWallet}>
              Disconnect
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={connectWallet}>
            Connect Wallet
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
