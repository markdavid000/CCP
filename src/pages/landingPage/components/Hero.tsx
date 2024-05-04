import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";
import "../../../App.css";

const heroImage = "./assets/heroImage.jpg";
const image5 = "./assets/image5.jpg";

export default function Hero() {
  return (
    <>
      <Flex
        gap={"10"}
        px={"8rem"}
        py={"5rem"}
        align={"center"}
        justify={"space-between"}
        w={"100%"}
      >
        <Box flex="1" mr="2rem">
          <Heading className="font" as="h1" size="2xl" noOfLines={2} mb="50px">
            Discover Top Creators And Influencers
          </Heading>
          <Text fontSize="xl">
            Jamii aim is to simplify the influencer marketing process for brands
            and provide them with access to a diverse range of talented creators
            who can help them achieve their marketing goals.
          </Text>
        </Box>
        <Box
          flex="1"
          position="relative"
          overflow="hidden"
          borderRadius="lg"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image
            src={heroImage}
            alt="Description of the image"
            w="80%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
      <Flex
        gap={"8"}
        px={"8rem"}
        py={"5rem"}
        align={"center"}
        justify={"space-between"}
        w={"100%"}
      >
        <Box
          flex="1"
          position="relative"
          overflow="hidden"
          borderRadius="lg"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image
            src={image5}
            alt="Description of the image"
            w="80%"
            h="100%"
            objectFit="cover"
            // mx="200px"
          />
        </Box>
        <Box flex="1">
          <Heading className="font" as="h1" size="2xl" noOfLines={2} mb={6}>
            Why Choose Us
          </Heading>
          <Text fontSize="xl">
            We are a Decentralised Content Creator platform where creatives get
            paid for their work without the presence of a middle man. Feel free
            to speak your mind without restrictions and regulations. Your voice
            is heard!
          </Text>
        </Box>
      </Flex>
    </>
  );
}
