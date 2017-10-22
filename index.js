var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://testrpc:8545"));

var partyAddress = '0x....';
var BlockParty = web3.eth.contract(abi);
var blockPartyInstance = BlockParty.at(partyAddress);

var owner = blockPartyInstance.owner.call();

console.log("owner="+owner);
