import { LOGIN, VALIDATE_AUTH, COMPLETED_WORKOUTS, PLANNED_WORKOUTS, UPDATE_WORKOUT, EXERCISES, SETS, UPDATE_SET, UPDATE_EXERCISE, ALL_EXERCISES, WORKOUTS, VALIDATE_SUBSCRIBED, LOGOUT, REGISTER, USER } from "./endpoint_urls";
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

export const check_subscribed = async () => {
  try {
    const response = await axios.get(VALIDATE_SUBSCRIBED,
    {
      withCredentials: true, 
    });
    return response.data.status === 'active'

  } catch (error) {
    return false
  }
}

export const user_details = async () => {
  try {
    const response = await axios.get(USER,
    {
      withCredentials: true, 
    });
    localStorage.setItem('userState', response.data)
    return response.data

  } catch (error) {
    return false
  }
}

export const register = async (name, email, password, password_confirmation) => {
  try {
      const response = await axios.post(REGISTER, {
      
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
        
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

export const logout = async () => {
  try {
      const response = await axios.delete(LOGOUT,
      {
      withCredentials: true, 
      }
  );
      return response

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const get_workouts = async () => {
  try {
      const response = await axios.get(WORKOUTS,
          {
          withCredentials: true, 
          }
      );
      return response.data

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

export const add_workout = async (name, date) => {
  try {
      const response = await axios.post(UPDATE_WORKOUT,
        {
          name: name,
          completed: false,
          date:date
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

export const get_all_exercises = async () => {
  try {
      const response = await axios.get(ALL_EXERCISES,
          {
          withCredentials: true, 
          },
          
      );
      return response.data

    } catch (error) {
      return {'data':error, 'status':error.status} 
    }
}

export const add_exercise = async (workout_id, name) => {
  try {
      const response = await axios.post(EXERCISES(workout_id),
        {
          
          'name':name
          
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

export const delete_exercise = async (workout_id, exercise_id) => {
  try {
      const response = await axios.delete(UPDATE_EXERCISE(workout_id, exercise_id),
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