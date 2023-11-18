

import {React, useState, useEffect } from 'react';
import { CREATE_SET_URL } from '../config';
import { useDataContext } from '../hooks/useDataContext';

const CreateNewSetForm = ({ currentExercise, setShowNewSetForm }) => {
  const [weight, setWeight] = useState('')
  const [nReps, setNReps] = useState(0)
  const [error, setError] = useState('')
  const [emptyFields, setEmptyFields] = useState([])

  const { exercises, sets, dataDispatch } = useDataContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newSet = {
      "workout_id": 0,  // for now, since workouts are not implemented
      "index": sets[0] ? sets[0].index + 1 : 0,
      "exercise_name": currentExercise.name,
      "weight": weight, 
      "n_reps": nReps
    }

    const response = await fetch(CREATE_SET_URL, {
      method: 'POST',
      body: JSON.stringify(newSet),
      headers: {
        'content-type': 'application/json'
      }
    })

    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      setError('')
      setEmptyFields([])
      setWeight('')
      setNReps(0)

      dataDispatch({type: 'CREATE_SET', payload: json[0]})

      setShowNewSetForm(false)
    }
  } 

  return (
    <div className="new-exercise-card">
      <h1>Create New Set for { currentExercise ? currentExercise.name : ""}</h1>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          onChange={ (e) => setWeight(e.target.value) }
          value = { weight }
          placeholder="Weight"
        />
        <input
          type="number"
          onChange={ (e) => setNReps(e.target.value) }
          value = { nReps }
          placeholder="Number of Reps"
        />
      <button>Add Set</button>
      </form>
      {/* <div className={ error ? "error-text show-error" : "error-text" }> */}
      <div>
        <p>{ error }</p>
      </div>
    </div>
  )
}

export default CreateNewSetForm