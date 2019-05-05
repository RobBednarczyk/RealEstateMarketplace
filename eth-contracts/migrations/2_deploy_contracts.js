// migrating the appropriate contracts
var Verifier = artifacts.require("Verifier");
//var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var MyOwnERC721Token = artifacts.require("MyOwnERC721Token");

module.exports = function(deployer) {
  deployer.deploy(Verifier);
  // deployer.deploy(SolnSquareVerifier);
  deployer.deploy(MyOwnERC721Token);
};
