import { VStack, Button, HStack, Text, Input, Box, Flex, useColorMode } from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { GrFormNextLink } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa";

import { add_exercise, add_workout, get_all_exercises, get_workouts } from "../../api/endpoints";
import { getNumToLastElementFromUrl } from "../../useful_functions/functions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AddInputSection = ({add_type, handleTitleChange, changedTitle}) => {

    const today = new Date();
    const year_now = today.getFullYear();
    const month_now = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day_now = String(today.getDate()).padStart(2, '0');

    const [date, setDate] = useState(`${year_now}-${month_now}-${day_now}`);

    const changeDate = (year, month, day) => {
        setDate(`${year}-${month}-${day}`)
    }

    return (
        <VStack w='100%' gap={{base: '30px', md:'30px'}}>
            <AddInput changeDate={changeDate} handleTitleChange={handleTitleChange} changedTitle={changedTitle} add_type={add_type} />
            <AddButton date={date} changedTitle={changedTitle} add_type={add_type}/>
        </VStack>
    )
}

const AddInput = ({changeDate, add_type, changedTitle, handleTitleChange}) => {

    const { colorMode } = useColorMode();
    
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
        <VStack w='100%' gap='20px'>
            <VStack w='100%' gap='0' position='relative'>
                <Input 
                    onFocus={handleClick}
                    onBlur={handleClick}
                    onChange={(e) => handleInput(e.target.value)}
                    value={ changedTitle === 'Exercise Name' || changedTitle === 'Workout Name' ? ' ' : changedTitle}
                    bg='white' 
                    h='54px' 
                    sx={{ textAlign: 'center', bg: 'white' }}
                    borderRadius={clicked & values.length>0 ? '8px 8px 0 0' : '8px'} 
                    color='gray.700'
                    fontSize={{base: '14px', md: '16px'}}
                    className="rubik"
                    focusBorderColor="transparent" 
                    borderColor='gray.300'
                    
                />
                
                {

                    values.length > 0 ?

                    <VStack zIndex='99'  top='53px' position='absolute' display={clicked ? 'block' : 'none'} w='100%' maxH='300px' overflowY='scroll' bg='white' h='fit-content' borderRadius='0 0 8px 8px' p='10px'>
                        {   
                            values.map((value) => {
                                return <ExerciseBar handleTitleChange={handleTitleChange} name={value} />
                            })
                        }
                    </VStack>

                    :

                    <></>
                }

            </VStack>

            {add_type === 'add_workout' && (
            <VStack w='100%' alignItems={{base:'center', md:'start'}} gap='10px'>
                <Text color={ colorMode === 'light' ? 'gray.700' : 'gray.300'} fontStyle='14px' className="rubik-medium">Workout Date</Text>
                <DateInput changeDate={changeDate} />
            </VStack>
            )}

        </VStack>
    )
}   

const DateInput = ({changeDate}) => {

    const today = new Date();
    const year_now = today.getFullYear();
    const month_now = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day_now = String(today.getDate()).padStart(2, '0');

    const [day, setDay] = useState(day_now);
    const [month, setMonth] = useState(month_now);
    const [year, setYear] = useState(year_now);

    useEffect(() => {
        changeDate(day, month, year)
    }, [day, month, year])

    return (
        <HStack>
            <DaySelect day={day} setDay={setDay} />
            <MonthSelect month={month} setMonth={setMonth} />
            <YearSelect year={year} setYear={setYear} />
        </HStack>
    )
}

const DaySelect = ({ day, setDay}) => {
    const menuSelection = (
        Array.from({ length: 31 }, (_, index) => {
                    const day = (index + 1).toString().padStart(2, '0'); // Pads the day with leading zero
                    return (
                        <MenuItem key={day} onClick={() => setDay(day)}>
                        {day}
                        </MenuItem>
                    );
        })
    )

    return (
        <SelectFormat value={day} menuSelection={menuSelection} />
    )
}

const MonthSelect = ({month, setMonth }) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const menuSelection = months.map((monthName, index) => {
      const monthNumber = (index + 1).toString().padStart(2, '0'); // Pads the month with leading zero
      return (
        <MenuItem key={monthNumber} onClick={() => setMonth(monthNumber)}>
          {monthName}
        </MenuItem>
      );
    });
  
    return <SelectFormat value={month} menuSelection={menuSelection} placeholder="Month" />;
  };
  
  const YearSelect = ({ year, setYear }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, index) => currentYear - index); // Generate the last 100 years
  
    const menuSelection = years.map((yearValue) => (
      <MenuItem key={yearValue} onClick={() => setYear(yearValue)}>
        {yearValue}
      </MenuItem>
    ));
  
    return <SelectFormat value={year} menuSelection={menuSelection} placeholder="Year" />;
  };

const SelectFormat = ({value, menuSelection}) => {
    return (
        <Menu>
            <MenuButton as={Button} border='1px solid' borderColor='gray.300' bg='white' color='gray.700' rightIcon={<Box color='gray.700'><FaAngleDown /></Box>}>
                {value}
            </MenuButton>
            <MenuList maxHeight='300px' overflowY="auto">
                {menuSelection}
            </MenuList>
        </Menu>
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

const AddButton = ({add_type, changedTitle, date}) => {

    const nav = useNavigate();

    const handleAdd = () => {

        if (add_type === 'add_exercise') {
            const workout_id = getNumToLastElementFromUrl(2);
            add_exercise(workout_id, changedTitle);
            nav(-1);
        } else if (add_type === 'add_workout') {
            add_workout(changedTitle, date)
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
            <HStack  color='white' gap={{base: '5px', md:'5px'}}  >
                <Text fontSize={{base: '15px', md:'17px'}} className="rubik">Add {add_type === 'add_exercise' ? 'Exercise' : 'Workout'}</Text>
                {/* display for mobile */}
                <Box display={{base:'block', md:'none'}}>
                    <GrFormNextLink size='22px' />
                </Box>
                {/* display for tablet/desktop */}
                <Box display={{base:'none', md:'block'}} >
                    <GrFormNextLink size='26px' />
                </Box>
            </HStack>
        </Button>
    )
}

export default AddInputSection;
