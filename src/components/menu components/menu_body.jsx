import { VStack, Flex, Box } from "@chakra-ui/react";

import Menu_Title from "./menu_title";
import Menu_Item_list from "./menu_items";


const Menu_Body = () => {

    return (
        <VStack w='100%' pb='50px'>

            <Flex justifyContent='center' alignItems='center' w='100%' mt='30px'>
                <Menu_Title />
            </Flex>

            <Box w='100%' mt='30px'>
                <Menu_Item_list />
            </Box>
     
        </VStack>
    )
}


export default Menu_Body;