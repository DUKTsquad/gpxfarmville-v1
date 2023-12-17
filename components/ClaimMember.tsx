import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { FARMER_ADDRESS } from "../const/contractAddresses";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

export function ClaimMember() {
    const { contract } = useContract(FARMER_ADDRESS);
    const { data: metadata } = useContractMetadata(contract);
    
    return (
        <Container maxW={"1200px"} paddingTop={"120"}>
            <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} h={"50vh"}>
                <Heading>Claim Personal Access Badge to Start Earning</Heading>
                <Box borderRadius={"8px"} overflow={"hidden"} my={10}>
                    <MediaRenderer
                        src={metadata?.image}
                        height="300px"
                        width="300px"
                    />
                </Box>
                
                <Web3Button
                    contractAddress={FARMER_ADDRESS}
                    action={(contract) => contract.erc1155.claim(0, 1)}
                >Get Access Badge</Web3Button>
            </Flex>
        </Container>
    );
}