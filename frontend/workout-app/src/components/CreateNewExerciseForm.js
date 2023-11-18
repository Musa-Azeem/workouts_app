

import {React, useState, useEffect } from 'react';
import { CREATE_EXERCISE_URL } from '../config';
import { useDataContext } from '../hooks/useDataContext';

const CreateNewExerciseForm = ({ setShowNewExerciseForm }) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [emptyFields, setEmptyFields] = useState([])

  const { exercises, sets, dataDispatch } = useDataContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newExercise = {"name": name}

    const response = await fetch(CREATE_EXERCISE_URL, {
      method: 'POST',
      body: JSON.stringify(newExercise),
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
      setName('')

      dataDispatch({type: 'CREATE_EXERCISE', payload: json[0]})

      setShowNewExerciseForm(false)
    }
  } 

  return (
    <div className="new-exercise-card">
      <h1>Create New Exercise</h1>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          onChange={ (e) => setName(e.target.value) }
          value = { name }
          placeholder="Exercise Name"
        />
      <button>Add Exercise</button>
      </form>
      {/* <div className={ error ? "error-text show-error" : "error-text" }> */}
      <div>
        <p>{ error }</p>
      </div>
    </div>
  )
}

export default CreateNewExerciseForm