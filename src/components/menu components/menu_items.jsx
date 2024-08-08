import { useEffect, useState } from "react";

import { VStack, Flex, HStack, Box, Text, useColorMode, Menu } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { IoAddCircleOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { MdSettings } from "react-icons/md";

import Motion_Item from "../motion";

const Menu_Item_list = () => {

    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 100); // Adjust the delay as needed
        return () => clearTimeout(timer);
      }, []);

    const items = [
        {
            'title': 'Add new workout',
            'description': 'Create a new workout from scratch or from a previous workout.',
            'icon': <IoAddCircleOutline size='28px' />,
            'link': 'add/workout',
        },
        {
            'title': 'Planned workouts',
            'description': 'View, update, delete or log planned workouts you created.',
            'icon': <GrPlan size='22px' />,
            'link': 'workouts/planned',
        },
        {
            'title': 'Completed workouts',
            'description': 'View, update, delete or log completed workouts you smashed.',
            'icon': <SiTicktick size='23px' />,
            'link': 'workouts/completed',
        },
        // {
        //     'title': 'Fitness progress',
        //     'description': 'View your fitness progression data, collected from the workouts you have completed.',
        //     'icon': <VscGraph size='24px' />,
        //     'link': 'progression',
        // },
        {
            'title': 'Settings',
            'description': 'View your user settings, logout your account, change metrics kg/lb.',
            'icon': <MdSettings size='26px' />,
            'link': 'settings',
        }
    ]

    return (
        <VStack w='100%' gap={{base:'15px', md:'20px'}}>
            {
                items.map((item, idx) => {
                    return (

                        <Motion_Item
                            key={idx}     
                            isVisible={isVisible}    
                            idx={idx}    
                            component={<Menu_Item title={item.title} description={item.description} icon={item.icon} link={item.link} />}   
                        />
                    )
                })
            }
        </VStack>
    )
}


const Menu_Item = ({title, description, icon, link}) => {

    const nav = useNavigate();
    const { colorMode } = useColorMode();

    const handleNavigate = () => {
        nav(`/${link}`);
    }

    return (
        <Flex w='100%' justifyContent='center' alignItems='center'>

        
        <Flex 
            onClick={handleNavigate}
            _hover={ colorMode === 'light' ? {'transform':'scale(0.98)', 'bg':'gray.50'} : {'transform':'scale(0.98)', 'bg':'rgba(76,76,93,26.67)'} }
            w='92%' 
            maxW='600px' 
            minH='140px' 
            bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' }
            transition="background-color 0.2s ease-in-out"
            
            // border='1px solid' 
            borderColor='gray.300' 
            borderRadius='10px'
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            >
                
                <HStack w='90%' pl='10px' pr='20px'  justifyContent='space-between' alignItems='center' color={colorMode === 'light' ? 'gray.700' : 'gray.300' }  >
                    <VStack alignItems='start' gap='5px' w='80%'>
                        <Text fontSize={{base: '18px', md:'20px'}} className="rubik-medium">{title}</Text>
                        <Text fontSize={{base: '13px', md:'15px'}} color={colorMode === 'light' ? 'gray.600' : 'gray.400' } className="rubik">{description}</Text>
                    </VStack>
                    {icon}

                </HStack>
                
        </Flex>
        </Flex>
    )
}

export default Menu_Item_list;