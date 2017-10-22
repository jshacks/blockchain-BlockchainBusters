var ConvertLib = artifacts.require("./ConvertLib.sol");
var PartyCoin = artifacts.require("./PartyCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, PartyCoin);
  deployer.deploy(PartyCoin);
};
