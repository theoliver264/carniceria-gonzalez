import { Image } from "@chakra-ui/image";
import { HStack } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/layout";
import Head from "next/head";
import ListItem from "../components/ListItem";
import {
  GiCow,
  GiPig,
  GiWaterBottle,
  GiSausage,
  GiMilkCarton,
  GiCorn,
  GiChicken,
  GiTacos,
} from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const Images = [
  { title: "Res", path: "/img/Res.jpg", icon: GiCow },
  { title: "Bebidas", path: "/img/Bebidas.jpg", icon: GiWaterBottle },
  { title: "Carnitas", path: "/img/Carnitas.jpg", icon: GiTacos },
  { title: "Cerdo", path: "/img/Cerdo.jpg", icon: GiPig },
  { title: "Embutidos", path: "/img/Embutidos.jpg", icon: GiSausage },
  { title: "Lacteos", path: "/img/Lacteos.jpg", icon: GiMilkCarton },
  { title: "Maiz", path: "/img/Maiz.jpg", icon: GiCorn },
  { title: "Paquetes", path: "/img/Paquetes.jpg", icon: FiPackage },
  { title: "Pollo", path: "/img/Pollo.jpg", icon: GiChicken },
  { title: "Otros", path: "/img/Otros.jpg", icon: GoPlus },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Carniceria Gonzalez</title>
        <meta name="description" content="Carniceria Gonzales - Menu Digital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        flexDir="column"
        w="100vw"
        maxW="100vw"
        overflow="hidden"
        minH="100vh"
        bg="#eee"
        gridGap="2rem"
      >
        <Grid
          bg="rgb(226, 6, 19)"
          w="100%"
          h="20vh"
          maxH="128px"
          flexDir="column"
        >
          <Image
            src="/img/logo.png"
            alt="Carniceria Gonzalez"
            placeSelf="center"
            maxH="128px"
          />
        </Grid>

        <Grid
          w="100%"
          templateColumns="1fr 1fr"
          gap="1rem"
          placeItems="center"
          maxW="90%"
          m="0 auto"
        >
          {Images.map(({ title, path, icon }, index) => (
            <ListItem
              key={index}
              title={title}
              path={path}
              icon={icon}
              index={index}
            />
          ))}
        </Grid>

        <Box w="100%" h="128px" bg="red" placeSelf="flex-end"></Box>
      </Flex>
    </>
  );
}
