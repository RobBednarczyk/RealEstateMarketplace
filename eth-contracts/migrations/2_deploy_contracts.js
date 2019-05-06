// // migrating the appropriate contracts
// var Verifier = artifacts.require("Verifier");
// //var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
// var MyOwnERC721Token = artifacts.require("MyOwnERC721Token");

const Verifier = artifacts.require("Verifier");
const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const MyOwnERC721Token = artifacts.require("MyOwnERC721Token");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(MyOwnERC721Token, {gas:6500000});
	await deployer.deploy(Verifier, {gas:6500000});
	let verifierInstance = await Verifier.deployed();
	await deployer.deploy(SolnSquareVerifier, verifierInstance.address, {gas:6500000});
};

// module.exports = function(deployer) {
//   deployer.deploy(Verifier);
//   // deployer.deploy(SolnSquareVerifier);
//   deployer.deploy(MyOwnERC721Token);
// };
