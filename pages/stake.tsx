import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { FARMER_ADDRESS, REWARDS_ADDRESS, STAKING_ADDRESS, TOOLS_ADDRESS } from "../const/contractAddresses";
import { ClaimMember } from "../components/ClaimMember";
import { UnstakedShares } from "../components/UnstakedShares";
import { StakedShares } from "../components/StakedShares";
import { BigNumber, ethers } from "ethers";
import { Text, Box, Card, Container, Flex, Heading, SimpleGrid, Spinner, Skeleton } from "@chakra-ui/react";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract: farmercontract } = useContract(FARMER_ADDRESS);
  const { contract: toolsContract } = useContract(TOOLS_ADDRESS);
  const { contract: stakingContract } = useContract(STAKING_ADDRESS);
  const { contract: rewardContract } = useContract(REWARDS_ADDRESS);

  const { data: ownedFarmers, isLoading: loadingOwnedFarmers } = useOwnedNFTs(farmercontract, address);
  const { data: ownedTools, isLoading: loadingOwnedTools } = useOwnedNFTs(toolsContract, address);

  const { data: equippedTools } = useContractRead(
    stakingContract, 
    "getStakeInfo",
    [address]
  );

  const { data: rewardBalance } = useContractRead(rewardContract, "balanceOf", [address]);
  
  if (!address) {
    return (
      <Container maxW={"1200px"}>
        <Flex direction={"column"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading my={"40px"}>Welcome to the DezNutZ</Heading>
          <ConnectWallet />
        </Flex>
      </Container>
    );
  }

  if (loadingOwnedFarmers) {
    return(
      <Container maxW={"1200px"}>
        <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <Spinner />
        </Flex>
      </Container>
    );
  }

  if (ownedFarmers?.length === 0) {
    return (
      <Container maxW={"1200px"}>
        <ClaimMember />
      </Container>
    );
  }

  return (
    <Container maxW={"1200px"} paddingTop={100}>
      <SimpleGrid columns={2} spacing={10}>
        <Card p={5}>
          <Heading>Member Info</Heading>
          <Text>Member</Text>
          <SimpleGrid columns={3} spacing={10}>
            <Box>
              {ownedFarmers?.map((nft) => (
                <div key={nft.metadata.id}>
                  <MediaRenderer 
                    src={nft.metadata.image} 
                    height="100%"
                    width="100%"
                  />
                </div>
              ))}
            </Box>
          </SimpleGrid>
        </Card>
        <Card p={5}>
          <Heading>Token Balance</Heading>
          <Text>Wallet Balance</Text>
          <SimpleGrid columns={3} spacing={10}>
            <Box>
              {ownedFarmers?.map((nft) => (
                <div key={nft.metadata.id}>
                  <MediaRenderer 
                    src={nft.metadata.image} 
                    height="100%"
                    width="100%"
                  />
                </div>
              ))}
            </Box>
          </SimpleGrid>
          <Box>
              <Text fontSize={"small"} fontWeight={"bold"}>$DezNutZ Balance:</Text>
                {rewardBalance && (
                    <p>{ethers.utils.formatUnits(rewardBalance, 18)}</p>
                  )}
              </Box>
        </Card>
      </SimpleGrid>
      <Card p={5} my={10}>
        <Heading mb={"30px"}>Unstaked NFTs | Start Earning</Heading>
        <Text>The amount of staked DezNFTs in your account available to use. This DOES NOT include NFTs currently staked. 
          NFTs must be staked in order to earn $DezNutZ.</Text>
        <SimpleGrid columns={1} spacing={10}>
        <Skeleton isLoaded={!loadingOwnedTools}>
            <UnstakedShares
              nft={ownedTools}
            />     
          </Skeleton>
        </SimpleGrid>
      </Card>
      <Card p={5} my={10}>
        <Heading mb={"30px"}>Staked NFTs | Claim Rewards</Heading>
        <Text>The amount of DezNFTs that are currently in use and earning rewards. This DOES NOT include your unstaked NFTs. 
          You can claim your accured rewards or unstake your NFTs.</Text>
        <SimpleGrid columns={3} spacing={10}>
            {equippedTools &&
              equippedTools [0].map((nft: BigNumber) => (
                <StakedShares
                  key={nft.toNumber()}
                  tokenId={nft.toNumber()}
                />
              ))}
        </SimpleGrid>
      </Card>
    </Container>
  );
};

export default Home;