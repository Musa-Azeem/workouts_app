import { createContext, useReducer } from 'react'

export const DataContext = createContext()

export const dataReducer = (state, action) => {
  // state is previous object before change
  // action has:
  //  type: describe the change to make
  //  payload: any data needed to make change
  // EX: dispatch({type: 'SET_EXERCISES', payload: [{}, {}]})

  switch(action.type) {
    // EXERCISES
    case 'SET_EXERCISES':
      return {
        ...state,
        exercises: action.payload
      }
    case 'CREATE_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, action.payload] 
      }

    // SETS
    case 'SET_SETS':
      return {
        ...state,
        sets: action.payload
      }
    case 'CREATE_SET':
      return {
        ...state,
        sets: [...state.sets, action.payload]
      }

    default:
      return state
  }
}

// provide context to all components
export const DataContextProvider = ({ children }) => {
  const [state, dataDispatch] = useReducer(dataReducer, {
    exercises: null,
    sets: null
  })
  
  // Return a template - the project context provider
  return (
    <DataContext.Provider value={{...state, dataDispatch}}> 
      { children }
    </DataContext.Provider>
  )
}