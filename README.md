# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. The scope of the project is to create ERC721 tokens representing real estate property titles. The tokens are minted using ZkSNARKs. The minted tokens are put on sale on OpenSea    

# Version
* Truffle v5.0.6
* Ganache v1.2.2
* solc-compiler v^0.5.2

# Installation
In order to install the software a user should clone the repository and run:

`npm install`

# Testing

All the tests were performed using a Ganache GUI
* host: 127.0.0.1
* port: 7545

If needed a user should update the parameters in the ./eth-contracts/truffle-config.js file

To run the test, navigate to ./eth-contracts and type:

`truffle test ./test/TestERC721Mintable.js`
`truffle test ./test/TestSquareVerifier.js`
`truffle test ./test/TestSolnSquareVerifier.js`

# Rinkeby deployment

The deployment on the rinkeby testnetwork was done using the address:

* 0xae1e8d612a9083D95a442C3fD6A6430ac9a6A3d3

The deployed contracts addresses are as follows:

* MyOwnERC721Token: 0x443D35BDBebC1216595eBc00dACA53247140da80
* Verifier: 0x5C57A0066fD3f6c59fEc8a39995875f1125A6481
* **SolnSquareVerifier: 0x41c4c4f4907b2B305E92C07A69c902528A9E1007**

The details of the deployment can be found in the ./eth-contracts/RinkebyDeploy.txt file

# Token minting

There are 10 tokens minted representing property titles
The command used:
`node mint.js`
All the details about the transaction hashes can be found in the ./TokenMinting.txt file

# OpenSea marketplace

The 10 tokens have been listed on the
[OpenSea marketplace](https://rinkeby.opensea.io/category/robbonrealestatemarketplace)

Three of them have already been sold to varius users:

1st transaction: token sold 0xaa2cfa47da3f857d661a3782c6b855bbc9d50cd4e7a0fb0b7fb75f56f1446cfe
2nd transaction: token sold 0xeaf5362401e48264db31a146ce1fe299a536a5c747bc8063a0249c54c3012745
3rd transaction: token sold 0x8ac6ac772bb1519f7e723f6c1c6363e36eba568ebf56ca65f7f3d288eed8cfaa


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
