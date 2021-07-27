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
import { FiFacebook, FiInstagram, FiPackage } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Icon } from "@chakra-ui/react";

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

        <Box flex="1 0 auto">
          <Grid
            w="100%"
            templateColumns={{
              base: "1fr 1fr",
              sm: "repeat(5, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap="1rem"
            placeItems="center"
            maxW="90%"
            m="0 auto"
            overflow="auto"
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
        </Box>

        <Grid
          w="100%"
          minH="128px"
          bg="#E20613"
          placeSelf="flex-end"
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          placeItems="center"
          gap="1rem"
          color="white"
          p="1rem"
        >
          <HStack gridGap="1rem">
            <Icon as={FiFacebook} boxSize={8} />
            <Text
              as="a"
              href="https://www.facebook.com/carniceriagonzalezmzo/"
              target="_blank"
              fontSize="1.5rem"
              fontWeight="medium"
            >
              Facebook
            </Text>
          </HStack>
          <HStack gridGap="1rem">
            <Icon as={FiInstagram} boxSize={8} />
            <Text
              as="a"
              href="https://www.instagram.com/carniceria.gonzalez/"
              target="_blank"
              fontSize="1.5rem"
              fontWeight="medium"
            >
              Instagram
            </Text>
          </HStack>
        </Grid>
      </Flex>
    </>
  );
}
