import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Collapse } from "@chakra-ui/transition";
import { useState } from "react";

export default function ListItem({ title, path }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle} isFullWidth>
        {title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="8px" color="white">
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
