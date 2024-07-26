import React from 'react'
import { useState } from 'react';
import { Paper, TextField } from '@mui/material';



const SearchBar = ({ onFormSubmit }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }


  const handleFormSubmit = (e) => {

    onFormSubmit(searchTerm);
    e.preventDefault();

  }




  return (
    <Paper elevation={6} style={{ padding: '25px', background: "#d0fff5", border:"5px solid",borderRadius:"20px" }}>
      <form onSubmit={handleFormSubmit} >
        <TextField fullWidth label="Search Here..." onChange={handleChange} />
      </form>
    </Paper>
  )
}

export default SearchBar
