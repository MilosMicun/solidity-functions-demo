// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FunctionsDemo {
    uint256 public counter;
    address public owner;

    constructor() {
        owner = msg.sender;
        counter = 0;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }

    function increment() external {
        counter += 1;
    }
}
