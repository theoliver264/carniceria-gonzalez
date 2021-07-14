import { Image } from "@chakra-ui/image";
import { HStack } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/layout";
import Head from "next/head";
import ListItem from "../components/ListItem";

const Images = [
  { title: "Res", path: "/img/Res.jpg" },
  { title: "Bebidas", path: "/img/Bebidas.jpg" },
  { title: "Carnitas", path: "/img/Carnitas.jpg" },
  { title: "Cerdo", path: "/img/Bebidas.jpg" },
  { title: "Bebidas", path: "/img/Cerdo.jpg" },
  { title: "Embutidos", path: "/img/Embutidos.jpg" },
  { title: "Lacteos", path: "/img/Lacteos.jpg" },
  { title: "Maiz", path: "/img/Maiz.jpg" },
  { title: "Paquetes", path: "/img/Paquetes.jpg" },
  { title: "Pollo", path: "/img/Pollo.jpg" },
  { title: "Otros", path: "/img/Otros.jpg" },
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
          p="1rem"
          w="100%"
          templateRows={{
            sm: "repeat(11, 1fr)",
            md: "repeat(5,1fr)",
            lg: "repeat(5,1fr)",
          }}
          templateColumns={{ sm: "auto", lg: "1fr 1fr" }}
        >
          {Images.map(({ title, path }, index) => (
            <ListItem key={index} title={title} path={path} index={index} />
          ))}
        </Grid>
      </Flex>
    </>
  );
}
