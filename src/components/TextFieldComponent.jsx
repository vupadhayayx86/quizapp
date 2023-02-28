import { FormControl,Box,TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/actions';

const TextFieldComponent = () => {

    const dispatch=useDispatch();

    const handleChange=(e)=>{
      dispatch(handleAmountChange(e.target.value))
    }

  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth size="small">
            <TextField 
            variant="outlined" 
            label="Amount of Questions" 
            type="number" 
            size="small"
            onChange={handleChange}
            >

            </TextField>
        </FormControl>
    </Box>
  )
}

export default TextFieldComponent