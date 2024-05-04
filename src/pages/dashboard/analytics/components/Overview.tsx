import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { analytics } from "../../../../constants/data";
import Example from "./Chart";

const Overview = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={"5rem"}>
        {analytics.map((item, index) => (
          <GridItem key={index}>
            <Box
              bgGradient="linear(to-r, #1d1d1e, #252528)"
              color="#fff"
              boxShadow="lg"
              transition={"all .5s ease-in-out"}
              py={"1.5rem"}
              px={"1rem"}
            >
              <Text
                className="font"
                fontWeight={"500"}
                fontSize={"1rem"}
                mb={"1rem"}
              >
                <Flex alignItems="center" gap="2">
                  {/* <AiOutlineLike /> */}
                  {item.title}
                </Flex>
              </Text>
              <Text className="font" fontWeight={"600"} fontSize={"1.5rem"}>
                {item.amount}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Example />
    </Box>
  );
};

export default Overview;
