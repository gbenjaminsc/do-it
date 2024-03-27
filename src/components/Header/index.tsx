import { Flex, Heading, Image } from "@chakra-ui/react";
import Logo from "../../assets/Icon.svg";

export const Header = () => {
  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex align="center">
        <Image src={Logo} />
        <Heading ml="4" size="lg">
          Dashdoard
        </Heading>
      </Flex>
    </Flex>
  );
};
