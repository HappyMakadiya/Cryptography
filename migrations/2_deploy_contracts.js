var BphToken = artifacts.require("./BphToken.sol");
var BphTokenSale = artifacts.require("./BphTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(BphToken, 1000000).then(function(){
    var tokenPrice = 1000000000000000;
   	return deployer.deploy(BphTokenSale, BphToken.address, tokenPrice);
  });
};