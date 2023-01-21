// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";


contract IITJToken is ERC20, Ownable, ERC20Permit {
    constructor() ERC20("IITJToken", "IITJT") ERC20Permit("IITJToken") {
        _mint(msg.sender, 1000 * 10 ** 18);

    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}