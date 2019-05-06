//var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
const MyOwnERC721Token = artifacts.require("MyOwnERC721Token");

contract('TestERC721Mintable', async (accounts) => {

    const owner = accounts[0];
    const account2 = accounts[1];
    const account3 = accounts[2];
    console.log(owner, ": owner");
    console.log(account2, ": account2");
    console.log(account3, ": account3");
    var contractInstance;


    describe('match erc721 spec', function () {
        beforeEach(async function () {
            //this.contract = await ERC721MintableComplete.new({from: account_one});
            contractInstance = await MyOwnERC721Token.deployed();
            // mint multiple tokens
            // await contractInstance.mint(account2, 1, {from:owner});
            // await contractInstance.mint(account2, 2, {from:owner});
            // await contractInstance.mint(account3, 3, {from:owner});

        })

        it('should return total supply', async function () {
            await contractInstance.mint(account2, 1, {from:owner});
            await contractInstance.mint(account2, 2, {from:owner});
            await contractInstance.mint(account3, 3, {from:owner});
            let totalSupply = await contractInstance.totalSupply.call();
            assert.equal(totalSupply, 3, "Total no. of tokens minted incorrect");
        })

        it("should return the correct owner of token no.1", async function() {
            let currentOwner = await contractInstance.ownerOf.call(1);
            assert.equal(currentOwner, account2);
        })

        it('should get token balance', async function () {
            let balanceOfUsr2 = await contractInstance.balanceOf.call(account2);
            assert.equal(balanceOfUsr2, 2, "The number of tokens owned by usr2 incorrect");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let correctURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
            let storedURI = await contractInstance.tokenURI.call(1);
            assert.equal(storedURI, correctURI, "The stored uri is incorrect");
        })

        it('should transfer token from one owner to another', async function () {
            let ownerBeforeTx = await contractInstance.ownerOf.call(1);
            assert.equal(ownerBeforeTx, account2);
            await contractInstance.transferFrom(account2, account3, 1, {from:account2});
            let ownerAfterTx = await contractInstance.ownerOf.call(1);
            assert.equal(ownerAfterTx, account3, "The owner after tx is incorrect");
        })
    });

    describe('has ownership properties', function () {
        beforeEach(async function () {
            //this.contract = await ERC721MintableComplete.new({from: account_one});
            contractInstance = await MyOwnERC721Token.deployed();
        })

        it('should fail when minting when address is not contract owner', async function () {
            let error = false;
            try {
                await await contractInstance.mint(account2, 1, {from:account3});
            } catch(err) {
                error = true;
            }
            assert.equal(error, true, "Only the owner is able to mint a token");
        })

        it('should return contract owner', async function () {
            let currentOwner = await contractInstance.owner.call();
            assert.equal(currentOwner, owner, "The contract owner is wrong");
        })

    });
})
