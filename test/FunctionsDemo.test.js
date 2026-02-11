const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FunctionsDemo", function () {
    let FunctionsDemo, demo, owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();

        FunctionsDemo = await ethers.getContractFactory("FunctionsDemo");
        demo = await FunctionsDemo.deploy(); // ✅ removed .deployed() for older Hardhat
    });

    it("getCounter() should return 0 after deployment", async function () {
        const count = await demo.getCounter();
        expect(count).to.equal(0);
    });

    it("increment() should increase counter by 1", async function () {
        // initial counter
        expect(await demo.getCounter()).to.equal(0);

        // owner calls increment
        await demo.increment();
        expect(await demo.getCounter()).to.equal(1);

        // addr1 calls increment
        await demo.connect(addr1).increment();
        expect(await demo.getCounter()).to.equal(2);
    });

    it("increment() gas cost", async function () {
        const tx = await demo.increment();
        const receipt = await tx.wait(); // wait for mining
        console.log("Gas used for increment():", receipt.gasUsed.toString());
    });

    it("addMemoryExample() should return [1,2,3]", async function () {
    const result = await demo.addMemoryExample();
    // result is already an array of numbers
    expect(result).to.deep.equal([1, 2, 3]);
});

it("doubleCounter() should multiply counter by 2", async function () {
    await demo.increment(); // counter = 1
    await demo.doubleCounter(); // counter = 2
    const value = await demo.getCounter();
    expect(value).to.equal(2);
});


});
