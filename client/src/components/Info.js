import React, { useState } from 'react'
import { Container, Divider, Grid, Paper, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PersonIcon from '@mui/icons-material/Person';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';

import Progress from './Progress';

const Info = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const [personData, setPersonData] = useState({
    'nama': 'Gabriel Damar Astukalyana Saroy',
    'tanggal': '23 September 2023',
    'jenis': 'Mutasi Sebagian',
    'keterangan': 'Mutasi sebagian dari Muhammad Marwan ke Gabriel Damar Astukalyana Saroy LT/LB 224/120',
    'nopel': 'WIJK3412391'
  })

  return (
    <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={12} square={false} sx={{background: '#F8FFE5', maxWidth: '720px'}}>
            <Typography variant='h4' align='center' padding={3}>Proses Pelayanan</Typography>
            <Divider variant='middle'/>
            <Grid container padding={6} paddingTop={2}>
                <Grid item>
                    <PersonIcon fontSize='medium' sx={{padding: '10px'}}/>
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{padding: '6px'}}>
                        Nama Pemohon
                    </Typography>
                </Grid>
                <Grid item xs={12} paddingBottom={3}>
                    <Typography sx={{paddingLeft: '50px', fontSize: '18px'}}>
                        {personData.nama}
                    </Typography>
                </Grid>
                {/* DATA */}
                <Grid item>
                    <CalendarMonthIcon fontSize='medium' sx={{padding: '10px'}}/>
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{padding: '6px'}}>
                        Tanggal Pelayanan
                    </Typography>
                </Grid>
                <Grid item xs={12} paddingBottom={3}>
                    <Typography sx={{paddingLeft: '50px', fontSize: '18px'}}>
                        {personData.tanggal}
                    </Typography>
                </Grid>
                {/* DATA */}
                <Grid item>
                    <TypeSpecimenIcon fontSize='medium' sx={{padding: '10px'}}/>
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{padding: '6px'}}>
                        Jenis Pelayanan
                    </Typography>
                </Grid>
                <Grid item xs={12} paddingBottom={3}>
                    <Typography sx={{paddingLeft: '50px', fontSize: '18px'}}>
                        {personData.jenis}
                    </Typography>
                </Grid>
                {/* DATA */}
                <Grid item>
                    <KeyboardIcon fontSize='medium' sx={{padding: '10px'}}/>
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{padding: '6px'}}>
                        Keterangan
                    </Typography>
                </Grid>
                <Grid item xs={12} paddingBottom={3}>
                    <Typography sx={{paddingLeft: '50px', fontSize: '18px'}}>
                        {personData.keterangan}
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant='middle'/>
            <Progress/>
        </Paper>
    </Container>
  )
}

export default Info