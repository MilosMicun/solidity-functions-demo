const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FunctionsDemo", function () {
  let demo;
  let owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const FunctionsDemo = await ethers.getContractFactory("FunctionsDemo");
    demo = await FunctionsDemo.deploy();
    await demo.deployed();
  });

  it("getCounter() should return 0 after deployment", async function () {
    expect(await demo.getCounter()).to.equal(0);
  });

  it("increment() should increase counter by 1", async function () {
    await demo.increment();
    expect(await demo.getCounter()).to.equal(1);
  });
});
