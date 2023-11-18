import {React, useState, useEffect, useRef } from 'react';
import { GET_EXERCISES_URL } from '../config';
import { useDataContext } from '../hooks/useDataContext';
import Sets from '../components/Sets';
import CreateNewExerciseForm from '../components/CreateNewExerciseForm';
import CreateNewSetForm from '../components/CreateNewSetForm';

const Exercise = () => {
  
  const [ currentExercise, setCurrentExercise ] = useState(null)
  const [ showNewExerciseForm, setShowNewExerciseForm ] = useState(false)
  const [ showNewSetForm, setShowNewSetForm ] = useState(false)
  const { exercises, sets, dataDispatch } = useDataContext()

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch(GET_EXERCISES_URL)
      const json = await response.json()
      if (response.ok) {
        dataDispatch({type: 'SET_EXERCISES', payload: json})
      }
    }
    fetchExercises()
  }, [dataDispatch])

  const handleSelectExercise = (e) => {
    e.preventDefault()
    setCurrentExercise(JSON.parse(e.target.value))
  }

  const handleCreateNewExercise = () => {
    setShowNewExerciseForm(true)
  }

  const handleCreateNewSet = () => {
    setShowNewSetForm(true)
  }

  return (
    <div className="exercises-page">
      <h1>Exercises</h1>
      {
        (()=> {
          if (exercises) {
            return (
              <div className="exercise-header-buttons">
                <div className="exercise-dropdown">
                  <button className="exercise-dropbtn">Choose an Exercise</button>
                  <div className="exercise-dropdown-content">
                    {exercises.map((exercise) => (
                        <button 
                          value={JSON.stringify(exercise)} 
                          key={exercise.name}
                          onClick={ (e) => handleSelectExercise(e) }>
                        {exercise.name}
                        </button>
                    ))}
                  </div>
                </div>
                <div className="create-new-exercise">
                  <button onClick={ handleCreateNewExercise }>
                    Create New Exercise
                  </button>
                </div>
                <div className="create-new-set">
                  <button onClick={ handleCreateNewSet }>
                    New Set
                  </button>
                </div>
              </div>
          )}
          else {
            return <h1>Loading...</h1>
          }
        })()
      }
      {
        (() => {
          if (showNewExerciseForm) {
            return (
              <CreateNewExerciseForm 
                setShowNewExerciseForm={ setShowNewExerciseForm }>
              </CreateNewExerciseForm>
            )
          }
          else {
            return (
              <>
                {showNewSetForm ? 
                  <CreateNewSetForm
                    currentExercise={ currentExercise ? currentExercise : exercises[0] }
                    setShowNewSetForm={ setShowNewSetForm }>
                  </CreateNewSetForm> : <></>
                }
                {
                  currentExercise ?
                    <Sets exercise={ currentExercise }></Sets> : exercises ?
                    <Sets exercise={ exercises[0] }></Sets> :
                    <></>
                }
              </>
            )
          }
        })() 
      }
    </div>
  )
}

export default Exercise