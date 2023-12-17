import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "../const/contractAddresses";
import Link from "next/link";
import { Text, Button, Container, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import NFT from "../components/NFT";

export default function Shop()  {
    const { contract } = useContract(TOOLS_ADDRESS);
    const { data: nfts } = useNFTs(contract);
    console.log(nfts);

    return (
        <Container maxW={"1200px"} paddingTop={120}>
            <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link
                    href="/"
                >
                    <Button>Back</Button>
                </Link>
            </Flex>
            <Heading mt={"40px"}>Buy Asset Shares Direct</Heading>
            <Text>Purchase Asset Shares with and stake your shares to start earning DUKs. You can purchase asset shares here directly or buy and trade them 
                on the Wealth Exchange.</Text>
            {!nfts ? (
                <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
                    <Spinner />
                </Flex>
            ) : (
                <SimpleGrid columns={3} spacing={10}>
                    {nfts?.map((nftItem) => (
                        <NFT 
                            key={nftItem.metadata.id}
                            nft={nftItem}
                        />
                    ))}
                </SimpleGrid>
            )}
        </Container>
    )
};