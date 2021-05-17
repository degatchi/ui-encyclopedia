import { useState } from 'react';
// import { ethers } from 'ethers';
// import GreeterABI from '../config/GreeterABI.json';

// const greeterAddress = '0x4a34b9de7b1af633563336c4f058042294b9fe34'; // rinkeby address

// const  useBlockchain = () => {
//   const [greeting, setGreetingValue] = useState('');
//   const [displayedGreeting, setDisplayedGreeting] = useState('');

// export const requestMetamask = async () => {
//   // requests account info from metamask wallet
//   await window.ethereum.request({ method: 'eth_requestAccounts' }); // prompts user to connect
// };

// export const fetchGreeting = async () => {
//   if (typeof window.ethereum !== 'undefined') {
//     // if metamask installed...
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const contract = new ethers.Contract(greeterAddress, GreeterABI.abi, provider);
//     try {
//       const newGreeting = await contract.greet();
//       setDisplayedGreeting(newGreeting);
//     } catch (err) {
//       alert(err);
//     }
//   }
// };

// export const setGreeting = async () => {
//   if (!greeting) return; // checks if user has entered a greeting
//   if (typeof window.ethereum !== 'undefined') {
//     // makes sure user is connected
//     await requestMetamask();
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner(); // user account is the signer
//     const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
//     const transaction = await contract.setGreeting(greeting); // call `setGreeting` function
//     setGreetingValue('');
//     await transaction.wait(); // wait for the tx to be mined
//     fetchGreeting(); // logs out the new value
//   }
// };
