const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");

const config = require("./mintParams.json");

const MNEMONIC = config.MNEMONIC;
const INFURA_KEY = config.INFURA_KEY;

let CONTRACT_ADDRESS = config.CONTRACT;
let OWNER_ADDRESS = config.OWNER;
const NETWORK = config.NETWORK;
const NUM_TOKENS = 10;
const proofList = [
    require("./zokrates/code/square/proof1.json"),
    require("./zokrates/code/square/proof2.json"),
    require("./zokrates/code/square/proof3.json"),
    require("./zokrates/code/square/proof4.json"),
    require("./zokrates/code/square/proof5.json"),
    require("./zokrates/code/square/proof6.json"),
    require("./zokrates/code/square/proof7.json"),
    require("./zokrates/code/square/proof8.json"),
    require("./zokrates/code/square/proof9.json"),
    require("./zokrates/code/square/proof10.json")
];
const CONTRACT_ARTIFACT = require("./eth-contracts/build/contracts/SolnSquareVerifier.json");
const ABI = CONTRACT_ARTIFACT.abi;

async function main() {

    const provider = new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/${INFURA_KEY}`);
    const web3Instance = new web3(provider);

    const contract = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, {gasLimit:"1000000"});
    // mint tokens and send directly to the owner
    let tokenId = 0;
    proofList.forEach(async(proof) => {
        tokenId++;
        try {
            let txObject = await contract.methods.mintAfterVerification(
                OWNER_ADDRESS,
                tokenId,
                proof.proof.A,
                proof.proof.A_p,
                proof.proof.B,
                proof.proof.B_p,
                proof.proof.C,
                proof.proof.C_p,
                proof.proof.H,
                proof.proof.K,
                proof.input
            ).send({from: OWNER_ADDRESS, gas: 3000000});
            console.log(`Transaction: ${txObject.transactionHash} - MINTED TOKEN ${tokenId}`);
        } catch(error) {
            console.log(error);
        }

    });
}

main();
