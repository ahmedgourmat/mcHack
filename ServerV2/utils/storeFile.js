const { Web3 } = require("web3");
const providerURL = "HTTP://127.0.0.1:7545";
const web3 = new Web3(providerURL);
const MyContract = require("../../blockchain/build/contracts/FileStorage.json");
const User = require("../models/UserModel");

async function storeFile(fileName,fileHash,id){
    
    const networkId = await web3.eth.net.getId();
    const contract = new web3.eth.Contract(
        MyContract.abi,
        MyContract.networks[networkId].address
    );

    try {
        const user = await User.findOne({_id:id});
        console.log(user)
        const encryptedPrivateKey = JSON.parse(user.privateKey); // Parsage de la clé privée
        console.log(encryptedPrivateKey)
        const accountObject = await web3.eth.accounts.decrypt(
        encryptedPrivateKey,
        "abcd"
        );
        const privateKey = accountObject.privateKey;
        const publicKey = user.adressePublic;

        web3.eth.accounts.wallet.add(privateKey);
    
        const tx = contract.methods.storeFile(fileName, fileHash);
        const gas = await tx.estimateGas({ from: publicKey });
        const gasPrice = await web3.eth.getGasPrice();
        const data = tx.encodeABI();
        const nonce = await web3.eth.getTransactionCount(publicKey);
        const txData = {
          from: publicKey,
          to: contract.options.address,
          data: data,
          gas,
          gasPrice,
          nonce,
        };
        const receipt = await web3.eth.sendTransaction(txData);
        return receipt.transactionHash;
      } catch (error) {
        console.log("Erreur", error);
        throw error;
      }
    
     
}
module.exports =storeFile;
