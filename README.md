# Solidity Functions Demo

This project is part of the **Blockchain Learning Plan – DAY 37: Functions** and is meant for practicing basic Solidity functions, state changes, and view/pure functions.

## Contents

- `contracts/FunctionsDemo.sol` – basic contract with:
  - `counter` (uint256) and `owner` (address)
  - `constructor()` for initialization
  - `getCounter()` view function
  - `increment()` function that modifies state
- `contracts/PracticeFunctions.sol` – practice contract with:
  - `increment()`, `doubleCounter()`, `resetCounter()`
  - `addMemoryExample()` – demonstrates a memory array
- `test/FunctionsDemo.test.js` – basic tests for `counter` and `increment()`.

## Key Concepts

- **State variables** – store data on the blockchain and cost gas when modified.
- **View functions** – read state but do not consume gas.
- **Pure functions** – do not read or modify state and do not consume gas.
- **Constructor** – executes once when the contract is deployed.
- **Public / Private / Internal** – control visibility of variables and functions.

## Testing

To run tests using Hardhat:

```bash
npx hardhat test
Tests cover the basic functionality of counter and the memory array example.