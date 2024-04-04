const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
  ethereum.request({ method: 'eth_requestAccounts' });
});