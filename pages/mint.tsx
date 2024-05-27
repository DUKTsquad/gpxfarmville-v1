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
            <Heading mt={"40px"}>Mint DezNFTz</Heading>
            <Text>Purchase NFTs to put DezNutZ to work for you and start earning rewards. You can Mint DezNFTz here directly <br />
            or buy and trade them on the exchange. Holders are eligible for special community rewards and air drops.<br /> DezNutZ are required to purchase NFTz...
                <Link
                    href="https://app.uniswap.org/explore/tokens/base/0x7c34c84347af3d06e0a6a6059a6a299fb16d2486"
                >
                    <Button>Buy DezNutZ on DEX</Button>
                </Link>
                <Link
                    href="https://app.uniswap.org/explore/tokens/base/0x7c34c84347af3d06e0a6a6059a6a299fb16d2486"
                >
                    <Button>Buy DezNutZ on DEX</Button>
                </Link>
                </Text>
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