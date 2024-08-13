import { VStack, Box } from "@chakra-ui/react"
import LandingTitle from "./landing_titles"
import LandingSignUp from "./landing_sign_up"
import LandingRating from "./landing_rating"
import LandingWorkoutExample from "./landing_workout_example"

const LandingBody = () => {
    return (
        <VStack w='100%' pb='50px'>
            <Box mt={{base:'16px', md:'30px'}} w='100%'>
                <LandingTitle />
            </Box>
            <Box mt={{base:'30px', md:'50px'}} w='100%'>
                <LandingSignUp />
            </Box>
            <Box mt={{base:'20px', md:'40px'}} w='100%'>
                <LandingRating />
            </Box>
            <Box mt={{base:'55px', md:'75px'}} w='100%'>
                <LandingWorkoutExample />
            </Box>

        </VStack>
    )
}

export default LandingBody