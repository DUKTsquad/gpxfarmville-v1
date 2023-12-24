/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Guapcoinx, Mumbai, Polygon } from "@thirdweb-dev/chains";
export const NETWORK = Guapcoinx;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x3Dd02A2712d2CF4af3F907568EBDD6f8DEFE752E";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x8679275ef981C9F361867775C53a6b5AB1AC1714";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://polygonscan.com";


// The address of you Account Factory Contract for Smart Wallet Setup.

export const ACCOUNT_FACTORY_ADDRESS = "0x67840a1d9994482a998ff020df13fdee17b509c7"


// Wealth App smart contrct addresses.

export const FARMER_ADDRESS = '0xB8CBF8109Fd61a4232DB760A13106fb664904641';

export const TOOLS_ADDRESS = '0x8679275ef981C9F361867775C53a6b5AB1AC1714';

export const REWARDS_ADDRESS = '0x2c4b725fDf3d606e5C4EDFEF1534Cc82a31bad2d';

export const STAKING_ADDRESS = '0xF5891B7755A165ACb45444C0fB6b97B91e51A4E5';

// Social Status smart contrct addresses.

export const STATUS_CONTRACT_ADDRESS = '0x0de6809f0C9564b74BfD6A6329c305C458be7B4e';
