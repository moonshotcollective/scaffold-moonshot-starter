# scaffold-moonshot-starter

Typescript x NextJS x Chakra-UI scaffold-eth production ready starter kit.

## Tech stack overview

We are using TypeScript with Next.js & Chakra UI on the front-end.

### 📁 Folder structure

```
.
├── packages # Monorepo using yarn workspaces & lerna
│ ├── web # Landing page using NextJS, TypeScript, Chakra-UI
│ ├── dapp # Web3, decentralized app using NextJS, TypeScript, Chakra-UI and ethers.js
│ ├── ui # Theme/design system shared accross web & dapp folders
│ ├── hardhat # Your contracts, using Hardhat with Typechain and ethers v5
│ └── subgraph # A subgraph that gets generated on contract deploys
└── ... config ...
```

## 🏄‍♂️ Quick Start

### Prerequisites

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)
- Account and API key for [WEB3.storage](https://web3.storage/) (Optional, it provides decentralized media storage)

### Setup env

In each package individually, create your `.env` files by copying the `.example.env` and fill in the empty values.

```sh
$ cd packages/[dapp, hardhat and schemas]
$ cp .example.env .env
```

### Create API Key

Go to https://web3.storage and set the value of WEB3STORAGE_TOKEN with your web3.storage API key.

### Clone the starter

```sh
$ git clone https://github.com/moonshotcollective/scaffold-moonshot-starter.git
```

### install dependencies

```sh
$ cd scaffold-moonshot-starter && yarn install
```

### 👷‍ Build your contracts!

run hardhat locally, get some faucet and 🛰 deploy your contract
Create a `mnemonic.secret` file or set one of your dev private key as the DEPLOYER_PRIVATE_KEY environment variables in packages/hardhat/.env

```sh
$ cd packages/hardhat
$ yarn chain
$ yarn faucet <YOUR_DEV_ADDRESS>

Deploying on localhost
$ yarn deploy --network localhost --reset

Deploying on mumbai
$ yarn deploy --network mumbai --reset

Deploying on an other testnet (make sure to edit the hardhat.config.js first)
$ yarn deploy --network mytestnet --reset
```

#### Testnet Faucets

- [Kovan](https://faucets.chain.link/kovan)
- [Mumbai](https://faucet.polygon.technology/)
- [Rinkeby](https://faucet.rinkeby.io/)
- [BSC](https://testnet.binance.org/faucet-smart)

### Dev Preview

**Build the ui theme:**

```bash
$ cd packages/ui
$ yarn build
```

**Build in local**

```bash
$ cd packages/hardhat-ts
$ yarn chain
```

Open a new terminal

```bash
$ yarn deploy
```

**Start the 📱 dApp:**

```bash
$ cd packages/dapp
$ yarn dev
```

**Start the 📱 landing page:**

> (Optional, doesn't need anything else to run)

```sh
$ cd packages/web
$ yarn dev
```
