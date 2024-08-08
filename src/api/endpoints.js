import { LOGIN, VALIDATE_AUTH, COMPLETED_WORKOUTS, PLANNED_WORKOUTS, UPDATE_WORKOUT, EXERCISES, SETS, UPDATE_SET, UPDATE_EXERCISE } from "./endpoint_urls";
import axios from 'axios';

export const check_auth = async () => {
    try {
        const response = await axios.get(VALIDATE_AUTH,
        {
        withCredentials: true, 
        }
    );
        return response.data

      } catch (error) {
        return false
      }
}

export const login = async (email, password) => {
    try {
        const response = await axios.post(LOGIN, {
          email: email,
          password: password,
        },
        {
        withCredentials: true, 
        }
    );
        return response

      } catch (error) {
        return {'data':error, 'status':error.status} 
      }
}

export const get_completed_workouts = async () => {
    try {
        const response = await axios.get(COMPLETED_WORKOUTS,
            {
            withCredentials: true, 
            }
        );
        return response.data

      } catch (error) {
        return {'data':error, 'status':error.status} 
      }
}

export const get_planned_workouts = async () => {
  try {
      const response = await axios.get(PLANNED_WORKOUTS,
          {
          withCredentials: true, 
          }
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const update_workout = async (id, ...args) => {
  try {
      const response = await axios.patch(`${UPDATE_WORKOUT}/${id}`,
        {
          ...args
        },
          {
          withCredentials: true, 
          },
          
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const get_exercises = async (id) => {
  try {
      const response = await axios.get(EXERCISES(id),
          {
          withCredentials: true, 
          },
          
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const update_exercise = async (workout_id, exercise_id, ...args) => {
  try {
      const response = await axios.patch(UPDATE_EXERCISE(workout_id, exercise_id),
        {
          ...args
        },
          {
          withCredentials: true, 
          },
          
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const get_sets = async (workout_id, exercise_id) => {
  try {
      const response = await axios.get(SETS(workout_id, exercise_id),
          {
          withCredentials: true, 
          },
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const add_set = async (workout_id, exercise_id) => {
  try {
      const response = await axios.post(SETS(workout_id, exercise_id),
          {
            'weight': '0',
            'reps': '0',
          },
          {
          withCredentials: true, 
          },
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const update_set = async (workout_id, exercise_id, set_id, ...args) => {
  try {
      const response = await axios.patch(UPDATE_SET(workout_id, exercise_id, set_id),
          {
            ...args
          },
          {
          withCredentials: true, 
          },
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const delete_set = async (workout_id, exercise_id, set_id) => {
  try {
      const response = await axios.delete(UPDATE_SET(workout_id, exercise_id, set_id),
          {
          withCredentials: true, 
          },
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}