// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FunctionsDemo {
    // DAY 37: Functions - Logic & Gas 
    uint256 public counter; // State variables (stored on blockchain - cost gas to write!)
    address public owner; 
    uint256[] public numbers; // Storage array

    constructor(){
        owner = msg.sender;
        counter = 0;
    }
    // VIEW function - reads state, doesn't modify (FREE to call externally!)
    function getCounter() public view returns (uint256) {
        return counter;
    }

    function increment() external {
        counter += 1;
    }
    function addMemoryExample() public pure returns (uint256[] memory){
    
    uint256[] memory temp = new uint256[](3);

    temp[0] = 1;
    temp[1] = 2;
    temp[2] = 3;

    return temp;
}
    function doubleCounter() external {
      counter = counter * 2;
}


 }