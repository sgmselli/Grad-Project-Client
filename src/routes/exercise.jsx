import { useColorMode, VStack } from "@chakra-ui/react"
import Navbar from "../components/navbar"
import Exercise_Body from "../components/exercise components/exercise_body";

const Exercise = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <Exercise_Body />

        </VStack>
    )
}

export default Exercise;