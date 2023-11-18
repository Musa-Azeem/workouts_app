
const BASE_URL="http://localhost:8000/"

module.exports = global.config = {
  GET_WORKOUTS_URL: BASE_URL + "get_all_workouts",
  GET_EXERCISES_URL: BASE_URL + "get_all_exercises",
  GET_SETS_URL: BASE_URL + "get_sets",
  CREATE_EXERCISE_URL: BASE_URL + "create_exercise",
  CREATE_SET_URL: BASE_URL + "create_set"
}