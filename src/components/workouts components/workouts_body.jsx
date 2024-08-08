import { VStack, Flex, HStack, Box, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_completed_workouts } from "../../api/endpoints";

import Workouts_List from "./workouts_list";
import Workouts_Title from "./workouts_title";

const Workouts_Body = ({workoutType}) => {

    return (
        <VStack w='100%' pb='50px'>

            <Box w='100%' mt='30px'>
                <Workouts_Title title={workoutType === 'completed' ? 'Completed' : 'Planned'} />
            </Box>

            <Box w='100%' mt='30px'>
                <Workouts_List workoutType={workoutType} />
            </Box>

        </VStack>
    )
}

export default Workouts_Body;