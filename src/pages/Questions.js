import { Typography,Box,Button, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/actions'
import { decode } from 'html-entities'

const getRandomInt=(max)=>{
  return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {

  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score
  }=useSelector(state=>state)
  
  // console.log(amount_of_question,question_category,question_difficulty,question_type);
  const [questionIndex,setQuestionIndex]=useState(0)
  const [options,setOptions]=useState([])
  const history=useNavigate();
  const dispatch=useDispatch();

console.log(options)
  

  let apiUrl=`/api.php?amount=${amount_of_question}`
  
  if(question_category){
    apiUrl=apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty){
    apiUrl=apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if(question_type){
    apiUrl=apiUrl.concat(`&type=${question_type}`)
  }
  
  const {response,loading}=useAxios({url:apiUrl})
  //console.log(response)

  useEffect(()=>{
    if(response?.results.length){
      const question=response.results[questionIndex];
      let answers=[...question.incorrect_answers]
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      )
      setOptions(answers)
    }
  },[response,questionIndex])

  if(loading){
    return(
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }
  const handleClickAnswer=(e)=>{
    const question=response.results[questionIndex]
    if(e.target.textContent===question.correct_answer){
      dispatch(handleScoreChange(score + 1))
    }


    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1)
    } else {
      history("/score")
    }
  }

  return (
    <Box>
      <Typography variant='h4'>Questions {questionIndex+1}</Typography>
      
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
     {options.map((data,id)=>(
       <Box mt={2} key={id}>
       <Button onClick={handleClickAnswer} variant='contained'>{decode(data)}</Button>
     </Box>
     ))}
      <Box mt={2}>
        <Button>Score : {score}/{response.results.length}</Button>
      </Box>
    </Box>
  )
}

export default Questions