import { MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useNFT } from "@thirdweb-dev/react";
import { STAKING_ADDRESS, TOOLS_ADDRESS } from "../const/contractAddresses";
import { ethers } from "ethers";
import { Text, Box, Card, Stack, Flex } from "@chakra-ui/react";

interface EquippedProps {
    tokenId: number;
};

export const StakedShares = (props: EquippedProps) => {
    const address = useAddress();

    const { contract: toolContract } = useContract(TOOLS_ADDRESS);
    const { data: nft } = useNFT(toolContract, props.tokenId);

    const { contract: stakingContract } = useContract(STAKING_ADDRESS);

    const { data: claimableRewards } = useContractRead(
        stakingContract,
        "getStakeInfoForToken",
        [props.tokenId, address]
    );

    return (
        <Box>
            {nft && (
                <Card p={5}>
                    <Box>
                        <Text fontSize={"2xl"} fontWeight={"bold"}>{nft.metadata.name}</Text>
                        <MediaRenderer
                            src={nft.metadata.image}
                            height="60%"
                            width="60%"
                        />
                        <Text p={5}>Staked: {ethers.utils.formatUnits(claimableRewards[0], 0)}</Text>
                        <Web3Button
                            contractAddress={STAKING_ADDRESS}
                            action={(contract) => contract.call("withdraw", [props.tokenId, 1])}
                        >Withdraw</Web3Button>
                    </Box>
                    <Box mt={5}>
                        <Text>Claimable $Earnings:</Text>
                        <Text>{ethers.utils.formatUnits(claimableRewards[1], 18)}</Text>
                        <Web3Button
                            contractAddress={STAKING_ADDRESS}
                            action={(contract) => contract.call("claimRewards", [props.tokenId])}
                        >Claim $Earnings</Web3Button>
                    </Box>
                </Card>
            )}
        </Box>
    )
};