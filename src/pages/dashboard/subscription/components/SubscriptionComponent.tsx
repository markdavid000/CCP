import {
  SimpleGrid,
  CardHeader,
  Card,
  CardBody,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import "../../../../App.css";

const SubscriptionComponent = () => {
  return (
    <Box
      color="#fff"
      boxShadow="2xl"
      border={"1px"}
      borderColor="#04A67D"
      transition={"all .5s ease-in-out"}
      p={5}
    >
      <Text
        className="font"
        fontWeight={"400"}
        fontSize={"1.4rem"}
        textAlign={"center"}
      >
        Subscription Plans
      </Text>
      <SimpleGrid spacing={4} templateColumns="repeat(2, 1fr)" p={"2rem"}>
        <Card
          bgGradient="linear(to-r, #1d1d1e, #252528)"
          color="#fff"
          boxShadow="lg"
          transition={"all .5s ease-in-out"}
          textAlign={"center"}
        >
          <CardHeader pb={"0"}>
            <Text className="font" fontWeight={"600"} fontSize={"2rem"}>
              Free
            </Text>
          </CardHeader>
          <CardBody>
            <Text
              className="font"
              fontWeight={"600"}
              fontSize={"1.5rem"}
              pb={"1.3rem"}
            >
              $65
            </Text>

            <Button
              bg={"#16181E"}
              borderRadius={".6rem"}
              border={"none"}
              boxShadow="lg"
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"170px"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #252528)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
            >
              <Text>Current Plan</Text>
            </Button>
          </CardBody>
        </Card>

        <Card
          bgGradient="linear(to-r, #1d1d1e, #252528)"
          color="#fff"
          boxShadow="lg"
          transition={"all .5s ease-in-out"}
          textAlign={"center"}
        >
          <CardHeader pb={"0"}>
            <Text className="font" fontWeight={"600"} fontSize={"2rem"}>
              6 Months
            </Text>
          </CardHeader>
          <CardBody>
            <Text
              className="font"
              fontWeight={"600"}
              fontSize={"1.5rem"}
              pb={"1.3rem"}
            >
              $65
            </Text>

            <Button
              bg={"#16181E"}
              borderRadius={".6rem"}
              border={"none"}
              boxShadow="lg"
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"170px"}
              _hover={{
                bgGradient: "linear(to-r, #252528, #04A67D)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
            >
              <Text>Select Plan</Text>
            </Button>
          </CardBody>
        </Card>
        <Card
          bgGradient="linear(to-r, #1d1d1e, #252528)"
          color="#fff"
          boxShadow="lg"
          transition={"all .5s ease-in-out"}
          textAlign={"center"}
        >
          <CardHeader pb={"0"}>
            <Text className="font" fontWeight={"600"} fontSize={"2rem"}>
              1 year
            </Text>
          </CardHeader>
          <CardBody>
            <Text
              className="font"
              fontWeight={"600"}
              fontSize={"1.5rem"}
              pb={"1.3rem"}
            >
              {" "}
              $5
            </Text>
            <Button
              bg={"#16181E"}
              borderRadius={".6rem"}
              border={"none"}
              boxShadow="lg"
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"170px"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #252528)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
            >
              <Text>Select Plan</Text>
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Button
        bgGradient="linear(to-r, #24B1B6, #04A67D)"
        borderRadius={".6rem"}
        border={"none"}
        boxShadow="lg"
        color={"#fff"}
        transition={"all .5s ease-in-out"}
        w={"100%"}
        _hover={{
          bgGradient: "linear(to-r, #04A67D, #24B1B6)",
          border: "none",
        }}
        _focus={{ outline: "none" }}
      >
        <Text>Upgrade Now</Text>
      </Button>
    </Box>
  );
};

export default SubscriptionComponent;
