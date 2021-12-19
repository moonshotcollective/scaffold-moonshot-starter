export const getInfuraUrl = (chainId: string) => {
  switch (Number.parseInt(chainId)) {
    case 1:
      return 'https://mainnet.infura.io/v3';
    case 3:
      return 'https://ropsten.infura.io/v3';
    case 4:
      return 'https://rinkeby.infura.io/v3';
    case 5:
      return 'https://goerli.infura.io/v3';
    case 137:
      return 'https://polygon-mainnet.infura.io/v3';
    default:
      return 'https://mainnet.infura.io/v3';
  }
};
