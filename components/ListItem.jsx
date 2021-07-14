import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Collapse } from "@chakra-ui/transition";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function ListItem({ title, path, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        onClick={onToggle}
        w="100%"
        flexDir="row"
        p="1rem"
        justifyContent="space-between"
        alignItems="center"
        borderTop="1px solid red"
        borderRight="1px solid red"
        borderLeft="1px solid red"
        {...(index == 10 && { borderBottom: "1px solid red" })}
      >
        <Text
          color="#E20613"
          fontWeight="bold"
          fontSize="18px"
          textTransform="uppercase"
        >
          {title}
        </Text>
        <Icon boxSize={5} color="red" as={AiFillCaretDown} />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box p="8px" color="white" bg="gray.100" borderBottomRadius="8px">
          {!isLoaded && <Spinner />}
          <Image
            src={path}
            alt={title}
            onLoad={() => setIsLoaded(true)}
            {...(!isLoaded && { display: "none" })}
          />
        </Box>
      </Collapse>
    </>
  );
}
