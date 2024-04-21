// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Counter {
    uint private count = 0;

    function getCount() public view returns (uint) {
        return count;
    }

    function setCount(uint providedcount) public returns (uint) {
        count = providedcount;
        return count;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        count--;
    }
}
