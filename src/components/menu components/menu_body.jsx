import { VStack, Flex, Box } from "@chakra-ui/react";

import MenuTitle from "./menu_title";
import MenuItemlist from "./menu_items";

const MenuBody = ({name}) => {

    return (
        <VStack w='100%' pb='50px'>

            <Flex justifyContent='center' alignItems='center' w='100%' mt='30px'>
                <MenuTitle name={name} />
            </Flex>

            <Box w='100%' mt='30px'>
                <MenuItemlist />
            </Box>
     
        </VStack>
    )
}


export default MenuBody;