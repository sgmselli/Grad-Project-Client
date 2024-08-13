import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_sets } from "../../api/endpoints";

import MotionItem from "../motion";
import SetBox from "./set_item";

const SetList = ({handleClick, clicked, workout_id, exercise_id}) => {

    const [sets, setSets] = useState([])
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 100); // Adjust the delay as needed
        return () => clearTimeout(timer);
      }, [clicked]);

    useEffect(() => {        
        const fetchSets = async () => {
            const sets = await get_sets(workout_id, exercise_id);
            setSets(sets);            
        }
        fetchSets();
    }, [clicked, workout_id, exercise_id])

    return (
        <VStack justifyContent='center' alignItems='center' w='100%' pb='50px' gap='15px'>
            
            {sets.map((set, idx) => {
                return (
                    <MotionItem
                    key={idx}     
                    isVisible={isVisible}    
                    idx={idx}    
                    component={
                        <SetBox
                            handleClick={handleClick}
                            set_num={idx+1}
                            set_id={set.id}
                            exercise_id={set.exercise_id}
                            set_weight={set.weight}
                            set_reps={set.reps}
                        />
                    }   
                />
                )
            })}
        </VStack>
    )
}

export default SetList;