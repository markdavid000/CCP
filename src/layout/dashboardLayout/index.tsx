import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { menu } from "../../constants/data.ts";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../App.css";
import ConnectButton from "../../components/ConnectButton.tsx";
import { RegisterCreator } from "../../components/RegisterCreator.tsx";
import useGetUserDetails from "../../hooks/useGetUserDetails.ts";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import ProfileDetails from "../../components/ProfileDetails.tsx";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  const { data: userDetails } = useGetUserDetails();
  console.log(userDetails);

  const { isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/feed" if the wallet is connected
    if (isConnected === false) {
      navigate("/");
    }
  }, [isConnected]);
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <Flex h="100vh">
      <Box
        w="500px"
        h="100vh"
        py={"2rem"}
        px={"1.8rem"}
        bg={"#171717"}
        overflowY={"auto"}
        overflowX={"hidden"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#fff",
          },
        }}
      >
        <Box
          mb={"5rem"}
          display={"flex"}
          alignItems={"start"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text
            className="fontOne"
            fontSize={"1.5rem"}
            fontWeight={"500"}
            color={"#04A67D"}
          >
            cre
            <Text as={"span"} fontSize={"1.8rem"} color={"#fff"}>
              8
            </Text>
            ify
          </Text>
          <ConnectButton />
        </Box>

        <Flex flexDirection={"column"} justify={"space-between"} h={"69%"}>
          <Flex flexDirection={"column"} gap={"1rem"}>
            {menu.map((item, index) => (
              <NavLink to={item.link} key={index} className="activeClassName">
                <Flex align={"center"} px={"1rem"}>
                  <Icon as={item.icon} />
                  <Text fontSize={".9rem"} p={".8rem"}>
                    {item.title}
                  </Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>

          {userDetails?.username ? (
            <ProfileDetails />
          ) : (
            <Button
              bgGradient="linear(to-r, #04A67D, #24B1B6)"
              borderRadius={"100rem"}
              border={"none"}
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"150px"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #24B1B6)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <Text>Register</Text>
            </Button>
          )}
          {/* {error && <Text>Error: {error}</Text>} */}
        </Flex>
      </Box>
      <Box
        w={"100%"}
        h={"100vh"}
        overflowY={"auto"}
        overflowX={"hidden"}
        py={"2.5rem"}
        px={"1.5rem"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#fff",
          },
        }}
      >
        {props.children}
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <RegisterCreator />
      </Modal>
    </Flex>
  );
};

export default DashboardLayout;
