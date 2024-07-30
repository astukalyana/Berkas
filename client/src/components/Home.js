import React, { useState } from 'react'
import { Button, Container, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {

  const history = useHistory()
  const [nopel, setNopel] = useState('')

  const handleSubmit = async (e) => {
    history.push(`/nopel/${nopel}`)
  }

  return (
    <Container sx={{display: 'flex', justifyContent: 'center', width: '720px', height: '480px', alignContent: 'center', alignItems: 'center'}}>
        <TextField 
        fullWidth
        label="Nomor Pelayanan"
        variant="outlined" 
        color="secondary"
        sx={{background: '#F8FFE5'}} 
        value={nopel}
        onChange={(e) => setNopel(e.target.value)}/>
        <Button variant='contained' type='submit' sx={{height: '56px'}}onClick={handleSubmit}>
            SEARCH
        </Button>
    </Container>
  )
}

export default Home