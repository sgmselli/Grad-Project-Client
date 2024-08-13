const BASE = `http://localhost:3000/api/v1/`

export const VALIDATE_AUTH = `${BASE}auth/validate`
export const LOGIN = `${BASE}sign_in`
export const LOGOUT= `${BASE}sign_out`

export const WORKOUTS = `${BASE}workouts`
export const COMPLETED_WORKOUTS = `${BASE}workouts/completed`
export const PLANNED_WORKOUTS = `${BASE}workouts/incomplete`
export const EXERCISES = (id) => {return `${BASE}workouts/${id}/exercises`}
export const ALL_EXERCISES = `${BASE}exercises/all`
export const SETS = (workout_id, exercise_id) => {return `${BASE}workouts/${workout_id}/exercises/${exercise_id}/exercise_sets`}

export const UPDATE_WORKOUT = `${BASE}workouts`
export const UPDATE_SET = (workout_id, exercise_id, set_id) => {return `${BASE}workouts/${workout_id}/exercises/${exercise_id}/exercise_sets/${set_id}`}

export const UPDATE_EXERCISE = (workout_id, exercise_id) => {return `${BASE}workouts/${workout_id}/exercises/${exercise_id}`}

export const STRIPE_CHECKOUT = `${BASE}stripe/checkout`;
export const STRIPE_CANCEL_UNSUBSCRIBE = `${BASE}stripe/cancel_unsubscribe`;
export const STRIPE_UNSUBSCRIBE = `${BASE}stripe/unsubscribe`;
export const VALIDATE_SUBSCRIBED = `${BASE}auth/subscribed`;

