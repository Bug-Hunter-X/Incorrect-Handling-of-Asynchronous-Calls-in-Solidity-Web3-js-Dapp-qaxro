async function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

const balance = await getBalance();
if (balance < 10) {
  // ... do something ...
}

//Alternative using .then
getBalance().then(balance => {
  if (balance < 10) {
    // ... do something ...
  }
})