// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FunctionsDemo {
    uint256 public counter;
    address public owner;
    uint256[] public numbers;

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
    
    function addMemoryExample() public pure returns(uint256[] memory){
    uint256[] memory temp = new uint256[](3);
    temp[0]=1;
    temp[1]=2;
    temp[2]=3;

    return temp;
}
