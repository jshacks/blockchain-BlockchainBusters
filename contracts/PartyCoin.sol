pragma solidity ^0.4.4;

import "./ConvertLib.sol";
import "zeppelin-solidity/contracts/token/MintableToken.sol";


contract PartyCoin is MintableToken {
	struct Publisher {
		address addr;
		bool isPublisher;
	}

	mapping (address => bool) publishers;
	mapping (address => bool) distributors;
	mapping (address => bool) monitors;

	modifier onlyPublisher() {
		require(publishers[msg.sender]);
		_;
	}

	modifier onlyDistributor() {
		require(distributors[msg.sender]);
		_;
	}

	modifier onlyMonitor() {
		require(monitors[msg.sender]);
		_;
	}

	function () onlyDistributor payable public {
		totalSupply = totalSupply.add(msg.value);
	    balances[msg.sender] = balances[msg.sender].add(msg.value);
		distributors[msg.sender] = true;

		Mint(msg.sender, msg.value);
		Transfer(0x0, msg.sender, msg.value);
	}
}
