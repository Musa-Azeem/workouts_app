import {React, useState, useEffect } from 'react';
import { GET_SETS_URL } from '../config';
import { useDataContext } from '../hooks/useDataContext';

const Sets = ({ exercise }) => {
  const { exercises, sets, dataDispatch } = useDataContext()

  useEffect(() => {
    const fetchSets = async () => {
      const response = await fetch(GET_SETS_URL+`/${exercise.name}`)
      const json = await response.json()
      if (response.ok) {
        dataDispatch({type: 'SET_SETS', payload: json})
      }
    }
    fetchSets()
  }, [dataDispatch, exercise])

  return (
    <div>
      {
        (() => {
          if (sets) {
            return (
              <div className="sets-div">
                <h2>Sets for { exercise.name }</h2>
                <table className="sets-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Weight</th>
                      <th>Reps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sets.map((set) => (
                      <tr key={ [set.workout_id, set.index] }>
                        <td>{ set.date_created }</td>
                        <td>{ set.weight }</td>
                        <td>{ set.n_reps }</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
        })()
      }
    </div>
  )
}

export default Sets