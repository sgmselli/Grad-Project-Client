import { VStack, Box } from "@chakra-ui/react";

import BackButton from "../back_button";

import WorkoutsList from "./workouts_list";
import WorkoutsTitle from "./workouts_title";

const WorkoutsBody = ({workoutType}) => {

    return (
        <VStack w='100%' pb='50px'>

            <Box w='92%' mt='20px' maxW='600px'>
                <BackButton />
            </Box>

            <Box w='100%' mt='20px' maxW='600px'>
                <WorkoutsTitle title={workoutType === 'completed' ? 'Completed' : 'Planned'} />
            </Box>

            <Box w='100%' mt='10px'>
                <WorkoutsList workoutType={workoutType} />
            </Box>

        </VStack>
    )
}

export default WorkoutsBody;