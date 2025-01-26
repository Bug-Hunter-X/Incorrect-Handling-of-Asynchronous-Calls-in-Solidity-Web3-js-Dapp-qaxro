# Incorrect Handling of Asynchronous Calls in Solidity/Web3.js Dapp

This repository demonstrates a common error in decentralized applications (Dapps) that use Web3.js to interact with the Ethereum blockchain: incorrect handling of asynchronous function calls.

The `getBalance.js` file contains buggy code that attempts to compare the balance to a value without waiting for the asynchronous call to complete. This will always result in a false condition. 

The `getBalanceSolution.js` file shows the correct way to handle this by using `async/await` or promises.