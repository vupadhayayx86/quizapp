import { FormControl, InputLabel, Menu, MenuItem,Select } from '@mui/material'
import { handleDifficultyChange,handleCategoryChange,handleTypeChange } from '../redux/actions'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const SelectField = (props) => {
    const dispatch =useDispatch();
    const {label,options}=props
    const [value,setValue]=useState("")
    const handleChange=(e)=>{
        setValue(e.target.value)
        switch(label){
          case "Category":
            dispatch(handleCategoryChange(e.target.value))
            break;
          case "Difficulty":
            dispatch(handleDifficultyChange(e.target.value))
            break;
          case "Type":
            dispatch(handleTypeChange(e.target.value))
            break;
          default:
            return;
            
        }
    }
   // console.log(options)
  return (
    <Box mt={3} width="100%">
        <FormControl size="small" fullWidth >
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                {
                  options.map(({id,name})=>(
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))
                }

            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField