import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import {
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { Collapse } from "@chakra-ui/transition";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function ListItem({ title, path, index, icon }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Grid
        onClick={onOpen}
        boxSize="150px"
        p="1rem"
        boxShadow="lg"
        templateRows="auto 1fr"
        bg="white"
        borderRadius="8px"
        placeItems="center"
      >
        <Icon boxSize="80px" color="black" as={icon} />
        <Text
          color="#E20613"
          fontWeight="bold"
          fontSize="18px"
          textTransform="uppercase"
        >
          {title}
        </Text>
      </Grid>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <ModalCloseButton />
            {!isLoaded && <Spinner />}
            <Image
              src={path}
              alt={title}
              onLoad={() => setIsLoaded(true)}
              visibility={isLoaded ? "visible" : "hidden"}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
