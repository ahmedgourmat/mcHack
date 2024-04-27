const { Web3 } = require("web3");
const providerURL = "HTTP://127.0.0.1:7545";
const web3 = new Web3(providerURL);
const MyContract = require("../../blockchain/build/contracts/FileStorage.json");
const User = require("../models/UserModel");

async function createWeb3Account(_id){
    
    const account = await web3.eth.accounts.create();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const admin = accounts[0]
        console.log(admin);
        const transactionObject = {
          from: admin,
          to: account.address,
          value: web3.utils.toWei("0.1", "ether"),
          gas: 6721975,
          gasPrice: 20000000000,
        };
    
        // Sign the transaction
        await web3.eth.accounts
          .signTransaction(transactionObject, process.env.PRIVATE_KEY)
          .then((signedTx) => {
            // Send the signed transaction
            return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
          })
          .then((receipt) => {
            console.log("Transaction sent:", receipt.transactionHash);
          })
          .catch((err) => {
            console.error("Error sending transaction:", err);
          });
        const networkId = await web3.eth.net.getId();
        const contract = new web3.eth.Contract(
          MyContract.abi,
          MyContract.networks[networkId].address
        );
        const balance = await web3.eth.getBalance(account.address);
        console.log(
          "Solde du compte:",
          web3.utils.fromWei(balance, "ether"),
          "ETH"
        );
    const encryptedPrivateKey = await web3.eth.accounts.encrypt(
          account.privateKey,
          "abcd"
        );
        console.log(encryptedPrivateKey);
    
        const storingPrivateKey = JSON.stringify(encryptedPrivateKey);
    await User.updateOne(
          { _id: _id },
          {
            privateKey: storingPrivateKey,
            publicKey: account.address,
          }
        );
}
module.exports = createWeb3Account;
