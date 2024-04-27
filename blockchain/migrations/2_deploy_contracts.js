const fileStorage = artifacts.require("FileStorage.sol");

module.exports = function (deployer) {
  deployer.deploy(fileStorage);
};
