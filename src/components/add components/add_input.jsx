import { VStack, Button, HStack, Text, Input, Box } from "@chakra-ui/react"
import { GrFormNextLink } from "react-icons/gr";
import { add_exercise, add_workout, get_all_exercises, get_workouts } from "../../api/endpoints";
import { getNumToLastElementFromUrl } from "../../useful_functions/functions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AddInputSection = ({add_type, handleTitleChange, changedTitle}) => {
    return (
        <VStack w='100%' gap={{base: '20px', md:'30px'}}>
            <AddInput handleTitleChange={handleTitleChange} changedTitle={changedTitle} add_type={add_type} />
            <AddButton changedTitle={changedTitle} add_type={add_type}/>
        </VStack>
    )
}

const AddInput = ({add_type, changedTitle, handleTitleChange}) => {
    
    const [allValues, setAllValues] = useState([])
    const [values, setValues] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const fetch_values = async () => {
            if (add_type === 'add_exercise') {
                const fetched_values = await get_all_exercises();
                console.log(fetched_values)
                setValues(fetched_values);
                setAllValues(fetched_values);

            } else if (add_type === 'add_workout') {
                const fetched_values= await get_workouts();
                setValues(fetched_values);
                setAllValues(fetched_values);
            }
        }
        fetch_values();
    }, [])

    const handleInput = (title) => {
        handleTitleChange(title);
        setValues(filterSearch(title))
    }

    const handleClick = () => {
        setClicked(!clicked)
    }

    const filterSearch = (input) => {
        const normalizedInput = input.toLowerCase().trim();
        return (allValues.filter((value) => 
            value.toLowerCase().includes(normalizedInput)
        ));

    }

    return (
        <VStack w='100%'>
            <Input 
                onFocus={handleClick}
                onBlur={handleClick}
                onChange={(e) => handleInput(e.target.value)}
                value={ changedTitle === 'Exercise Name' || changedTitle === 'Workout Name' ? ' ' : changedTitle}
                bg='white' 
                h='54px' 
                sx={{ textAlign: 'center', bg: 'white' }}
                borderRadius={clicked ? '8px 8px 0 0' : '8px'} 
                color='gray.700'
                fontSize={{base: '14px', md: '16px'}}
                className="rubik"
                focusBorderColor="transparent" 
                
            />
            <VStack zIndex='99' top='20px' position='absolute' display={clicked ? 'block' : 'none'} w='100%' maxH='300px' overflowY='scroll' bg='white' h='fit-content' borderRadius='0 0 8px 8px' p='10px'>
                {values.map((value) => {
                    return <ExerciseBar handleTitleChange={handleTitleChange} name={value} />
                })}
            </VStack>
        </VStack>
    )
}   

const ExerciseBar = ({name, handleTitleChange}) => {

    const handleClick = () => {
        handleTitleChange(name);
    }

    return (
        <HStack onMouseEnter={handleClick} w='100%' justifyContent='center' p='10px 0' _hover={{bg:"gray.100"}} cursor='pointer'>
            <Text className="rubik" fontSize='16px' color='gray.600'>{name}</Text>
        </HStack>
    )
}

const AddButton = ({add_type, changedTitle}) => {

    const nav = useNavigate();

    const handleAdd = () => {

        if (add_type === 'add_exercise') {
            const workout_id = getNumToLastElementFromUrl(2);
            add_exercise(workout_id, changedTitle);
            nav(-1);
        } else if (add_type === 'add_workout') {
            add_workout(changedTitle)
            nav('/workouts/planned')
        }
    }

    return (
        <Button
            onClick={handleAdd}
            bg='blue.400'
            cursor='pointer'
            _hover={{'bg':'blue.500', 'transform':'scale(0.99)'}}
            h={{base: '50px', md:'60px'}}
            w='100%'
            
        >
            <HStack  color='white' gap={{base: '5px', md:'10px'}}  >
                <Text fontSize={{base: '15px', md:'19px'}} className="rubik">Add {add_type === 'add_exercise' ? 'Exercise' : 'Workout'}</Text>
                {/* display for mobile */}
                <Box display={{base:'block', md:'none'}}>
                    <GrFormNextLink size='22px' />
                </Box>
                {/* display for tablet/desktop */}
                <Box display={{base:'none', md:'block'}} >
                    <GrFormNextLink size='28px' />
                </Box>
            </HStack>
        </Button>
    )
}

export default AddInputSection;
