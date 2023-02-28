import React from 'react'
import { Button, Typography, Box, CircularProgress } from '@mui/material'
import SelectField from '../components/SelectField'
import TextFieldComponent from '../components/TextFieldComponent'
import useAxios from '../hooks/useAxios'
import {useNavigate} from "react-router-dom"

const Settings = () => {
  const {response,error,loading}=useAxios({url:"/api_category.php"})
  const history=useNavigate();
  console.log(response)

   if(loading){
    return(
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
   } 

   if(error){
    return(
      <Typography mt={20} variant="h5" color="red">
        Something Went Wrong
      </Typography>
    )
   }

  const handleSubmit=(e)=>{
    e.preventDefault()
    //history.push("/questions")
    history("/questions")
  }
  const difficultyOptions=[
    {id:"easy", name:"Easy"},
    {id:"medium", name:"Medium"},
    {id:"hard", name:"Hard"},
  ]

  const typeOptions=[
    {id:"multiple", name:"Multiple Choice"},
    {id:"boolean",name:"True/False"}
  ]

  return (
    <form onSubmit={handleSubmit}>
        <Typography variant="h4" fontWeight="bold">
              Quiz App
            </Typography>
        <SelectField options={response.trivia_categories} label="Category"/>
        <SelectField options={difficultyOptions} label="Difficulty"/>
        <SelectField options={typeOptions} label="Type"/>
        <TextFieldComponent />
        <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
        </Box>
    </form>
  )
}

export default Settings