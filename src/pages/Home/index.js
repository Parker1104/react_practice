import { useState, useEffect, useRef } from 'react'
import { API_GET_DATA } from '../../global/constants'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const Home = () => {
  const [data, setData] = useState([])
  const isSubmit = useRef([false])

  async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
  }

  async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
  }

  useEffect(() => {
    console.log('isSubmit', isSubmit.current)
    if (!isSubmit.current) return
    fetchSetData(data).then(res => {
      isSubmit.current = false
    })
  }, [data])

  useEffect(() => {
    // fetch(API_GET_DATA)
    // .then(res => res.json())
    // .then(res => {
    //   console.log('res', res)
    // })
    fetchData(setData)
  }, [])

  return (
    <div className="app">
      <Edit addClick={setData} isSubmit={isSubmit}/>
      <List listData={data} deleteData={setData} isSubmit={isSubmit}/>
    </div>
  )
}

export default Home
