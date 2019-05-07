// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

const Verifier = artifacts.require("Verifier");
const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

const proof = require("../../zokrates/code/square/proof1.json");

contract("TestSolnSquareVerifier", async(accounts) => {

	let owner = accounts[0];
	let user2 = accounts[1];
	var solnSquareInstance;

	describe("TestVerificationMinting", (accounts) => {

		beforeEach(async() => {
			try {
				let verifierInstance = await Verifier.deployed();
				solnSquareInstance = await SolnSquareVerifier.deployed();
			} catch(err) {
				console.log(err);
			}
		});

		it("mints a token after verifying the solution", async() =>{

			var error = false;
			try {
				// only owner can mint new tokens
				await solnSquareInstance.mintAfterVerification(
					// mint the token and send it to user2
					user2,
					1,
					proof.proof.A,
                    proof.proof.A_p,
                    proof.proof.B,
                    proof.proof.B_p,
                    proof.proof.C,
                    proof.proof.C_p,
                    proof.proof.H,
                    proof.proof.K,
					proof.input,
					{from:owner}
				);
			} catch(err) {
				error = true;
				//console.log(err);
			}

			assert.equal(error, false, "Error while minting a token");

		});

		it("tries to mint a token with already used Id", async() => {
			var error;

			// await solnSquareInstance.mintAfterVerification(
			// 	user2,
            //     1,
            //     proof.proof.A,
            //     proof.proof.A_p,
            //     proof.proof.B,
            //     proof.proof.B_p,
            //     proof.proof.C,
            //     proof.proof.C_p,
            //     proof.proof.H,
            //     proof.proof.K,
            //     proof.input,
			// 	{from: owner}
			// );

			try {
				// only owner can mint new tokens
				await solnSquareInstance.mintAfterVerification(
					// mint the token and send it to user2
					user2,
					1,
					proof.proof.A,
                    proof.proof.A_p,
                    proof.proof.B,
                    proof.proof.B_p,
                    proof.proof.C,
                    proof.proof.C_p,
                    proof.proof.H,
                    proof.proof.K,
					proof.input,
					{from:owner}
				);
			} catch(err) {
				error = true;
				//console.log(err);
			}

			assert.equal(error, true, "Cannot mint with the already used ID");
		});

		it("tries to mint a token with already used solution input", async() => {
			var error;

			// await solnSquareInstance.mintAfterVerification(
			// 	user2,
            //     1,
            //     proof.proof.A,
            //     proof.proof.A_p,
            //     proof.proof.B,
            //     proof.proof.B_p,
            //     proof.proof.C,
            //     proof.proof.C_p,
            //     proof.proof.H,
            //     proof.proof.K,
            //     proof.input,
			// 	{from: owner}
			// );

			try {
				// only owner can mint new tokens
				await solnSquareInstance.mintAfterVerification(
					// mint the token and send it to user2
					user2,
					2,
					proof.proof.A,
                    proof.proof.A_p,
                    proof.proof.B,
                    proof.proof.B_p,
                    proof.proof.C,
                    proof.proof.C_p,
                    proof.proof.H,
                    proof.proof.K,
					proof.input,
					{from:owner}
				);
			} catch(err) {
				error = true;
				//console.log(err);
			}

			assert.equal(error, true, "Cannot mint a new token with already used solution input");
		});

	});
})
