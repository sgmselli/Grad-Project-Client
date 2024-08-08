import { HStack, Text, useColorMode } from "@chakra-ui/react";

import Logo from "../logo";


const Menu_Title = () => {

    const { colorMode } = useColorMode();

    return (
        <HStack gap='16px'>
            <HStack  color={colorMode === 'light' ? 'gray.600' : 'gray.300'} fontSize={{base: '20px', md:'28px'}}>
                <Text className="rubik-bold" whiteSpace='nowrap'>Good morning,</Text>
                <Text className="rubik-extrabold">Matthew! </Text>
            </HStack>
            <Logo pixels={28} />
        </HStack>
    )
}
 
export default Menu_Title;