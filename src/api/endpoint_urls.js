const BASE = `http://localhost:3000/api/v1/`

export const VALIDATE_AUTH = `${BASE}auth/validate`
export const LOGIN = `${BASE}sign_in`

export const COMPLETED_WORKOUTS = `${BASE}workouts/completed`
export const PLANNED_WORKOUTS = `${BASE}workouts/incomplete`
export const EXERCISES = (id) => {return `${BASE}workouts/${id}/exercises`}
export const SETS = (workout_id, exercise_id) => {return `${BASE}workouts/${workout_id}/exercises/${exercise_id}/exercise_sets`}

export const UPDATE_WORKOUT = `${BASE}workouts`
export const UPDATE_SET = (workout_id, exercise_id, set_id) => {return `${BASE}workouts/${workout_id}/exercises/${exercise_id}/exercise_sets/${set_id}`}



