# KICKETHER

[Live Demo](https://kickether.herokuapp.com)

> _Note that this demo is only working on **Rinkeby** test net._

This is one of my hobby to build a DApp using Ethereum Blockchain.

## Features

- Campaign owner can create a campaign
- Campaign owner can create requests to send Ether to a vendor
- Each request is approved by a majority of all contributors
- Finalize to send Ether to the vendor

## App Development

- Set `$RINKEBY_API` (if you don't have API url please create it through [INFURA](https://infura.io/)) in your local environment

```sh
$ export RINKEBY_API=https://rinkeby.infura.io/v3/e8b3e20085c348e3989fcc83c4*****
```

```sh
$ yarn
$ yarn start
```

## App Deployment

- Set `NODE_ENV` to `production`
- Set `$RINKEBY_API`

And just run a command below or using a service like [Heroku](https://devcenter.heroku.com/categories/nodejs-support). If you don't use Heroku, need to build a web server to port forward or [Zeit](https://zeit.co) but Zeit didn't work well for me.


```sh
$ yarn start
```

## Contract Development

You can change a `/ethereum/contracts/Campaign.sol` for you through [Remix](http://remix.ethereum.org/).
Copy all contents of it to Remix and you can write solidity tests in `/test/Campaign.test.js` if you are sure what you want to do.

```sh
$ yarn test
```

## Contract Deployment

```sh
$ cd ethereum
$ node deploy.js
Attempting to deploy from account 0x672b39F0D2609a6FeC23358f4b8D8c92104BAF56
Contract deployed to 0x36334DDe59be7453B82ADf8807a00713a0678D8F
```

You can check `Campaign Factory` contract through [Etherscan](https://rinkeby.etherscan.io/address/0x36334DDe59be7453B82ADf8807a00713a0678D8F)


After command above you should copy `Contract deployed to` into `'HERE'` as below and restart a server.

```js
...
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  'HERE'
);
...
```

## TODO

- [ ] Upgrade all libraries (Next.js, web3, solc, ...) to the latest version
- [ ] Add code coverage and test automation using CI
