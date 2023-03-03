async function main() {
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")


  // Deploy Contract
  const token = await Token.deploy('Rodd Token', 'RODD', '10000000')
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)  
}

main()
  .then (() => process.exit (0))
  .catch ((error) => {
  console.error (error);
  process.exit(1);
});
