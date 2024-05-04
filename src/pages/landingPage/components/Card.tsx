import * as React from "react";
import { Box, Image, Flex, Center, Heading } from "@chakra-ui/react";
import "../../../App.css";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [tilt, setTilt] = React.useState<{ tiltX: number; tiltY: number }>({
    tiltX: 0,
    tiltY: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = (rect.width / 2 - x) / 10;
    const tiltY = (rect.height / 2 - y) / 10;
    setTilt({ tiltX, tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ tiltX: 0, tiltY: 0 });
  };

  return (
    <Box
      borderWidth="2px"
      borderRadius="xl"
      overflow="hidden"
      w="220px"
      minH="300px"
      position="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
        transition: "transform 0.2s",
      }}
    >
      <Image src={image} alt="" objectFit="cover" w="100%" h="100%" />
    </Box>
  );
};

const CardRow: React.FC = () => {
  // Replace these with the paths to your images
  const image1 = "./assets/image1.jpg";
  const image2 = "./assets/image2.jpg";
  const image3 = "./assets/image3.jpg";
  const image4 = "./assets/image4.jpg";

  return (
    <Box mx={"13rem"} my={"6rem"}>
      <Center>
        <Heading className="font" my="20px">
          Most Viewed Content
        </Heading>
      </Center>
      <Flex
        direction="row"
        justifyContent="space-between"
        py="50px"
        gap={"1rem"}
      >
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
      </Flex>
    </Box>
  );
};

export default CardRow;
