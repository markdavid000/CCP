import {
  Box,
  Flex,
  Grid,
  GridItem,
  Img,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { content } from "../../../../constants/data";
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import useGetContent from "../../../../hooks/useGetContent";

const Content = () => {
  const { data: contentItem, loading, error } = useGetContent();
  console.log(contentItem);
  const [fullContent, setFullContent] = useState(content);
  const [id, setId] = useState(fullContent[0]);
  const [liked, setLiked] = useState(false);
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const handleFullContent = (e: any) => {
    setId(e);

    setFullContent((prev) => prev);
  };

  const handleLiked = () => {
    if (!liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {content.map((item, index) => (
        <GridItem
          key={index}
          w={"100%"}
          bg={"#292929"}
          p={".7rem"}
          borderRadius={".5rem"}
        >
          <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
            <Img
              src={item.img}
              w={"50px"}
              h={"50px"}
              objectFit={"cover"}
              borderRadius={"100%"}
              alt="image"
            />
            <Flex align={"end"} gap={".4rem"}>
              <Box>
                <Text color={"#B1B1B1"} fontSize={".9rem"}>
                  {item.username}
                </Text>
                <Text>{item.name}</Text>
              </Box>
              <Text color={"#15AB99"}>. 1 hr ago</Text>
            </Flex>
          </Flex>
          <Box
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
              handleFullContent(item);
            }}
          >
            <Img
              mb={"1rem"}
              src={item.img}
              alt="image"
              h={"200px"}
              w={"100%"}
              objectFit={"cover"}
              cursor={"pointer"}
              borderRadius={".5rem"}
            />
          </Box>
          <Flex justify={"space-between"}>
            <Box>
              <Flex gap={"2rem"}>
                <Flex gap={".2rem"} onClick={handleLiked} cursor={"pointer"}>
                  <Icon
                    as={GoHeartFill}
                    fontSize={"1.5rem"}
                    color={liked ? "#ff0000" : ""}
                  />
                  <Text>{item.likes}</Text>
                </Flex>
                <Flex gap={".2rem"}>
                  <Icon as={FiEye} fontSize={"1.5rem"} />
                  <Text>{item.views}</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              borderRadius={"50rem"}
              px={"1rem"}
              bgGradient="linear(to-r, #04A67D, #24B1B6)"
              border={"none"}
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #24B1B6)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
            >
              {item.tag}
            </Box>
          </Flex>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent bg={"#262628"} className="font">
              <ModalBody pb={6} pt={9}>
                <Img
                  mb={"1rem"}
                  src={id.img}
                  alt="image"
                  objectFit={"cover"}
                  borderRadius={".5rem"}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Content;
