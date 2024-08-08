import { VStack, Box } from "@chakra-ui/react"
import Landing_Title from "./landing_titles"
import Landing_Sign_Up from "./landing_sign_up"
import Landing_Rating from "./landing_rating"
import Landing_Workout_Example from "./landing_workout_example"

const Landing_Body = () => {
    return (
        <VStack w='100%' pb='50px'>
            <Box mt={{base:'16px', md:'30px'}} w='100%'>
                <Landing_Title />
            </Box>
            <Box mt={{base:'30px', md:'50px'}} w='100%'>
                <Landing_Sign_Up />
            </Box>
            <Box mt={{base:'20px', md:'40px'}} w='100%'>
                <Landing_Rating />
            </Box>
            <Box mt={{base:'55px', md:'75px'}} w='100%'>
                <Landing_Workout_Example />
            </Box>

        </VStack>
    )
}

export default Landing_Body