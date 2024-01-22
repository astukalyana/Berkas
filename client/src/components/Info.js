import React, { useState } from 'react'
import { Container, Divider, Grid, Icon, IconButton, Paper, Typography, backdropClasses } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PersonIcon from '@mui/icons-material/Person';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';

const Info = () => {
  
  const [personData, setPersonData] = useState({
    'nama': 'Gabriel Damar Astukalyana Saroy',
    'tanggal': '23 September 2023',
    'jenis': 'Mutasi Sebagian',
    'keterangan': 'Mutasi sebagian dari Muhammad Marwan ke Gabriel Damar Astukalyana Saroy'
  })

  return (
    <Paper elevation={12} square={false} sx={{background: '#F8FFE5'}}>
        <Typography variant='h3' align='center' padding={3}>Proses Pelayanan</Typography>
        <Divider variant='middle'/>
        <Grid container padding={6} paddingTop={2}>
            <Grid item>
                <PersonIcon fontSize='large' sx={{padding: '10px'}}/>
            </Grid>
            <Grid item>
                <Typography variant='h4' sx={{padding: '6px'}}>
                    Nama Pemohon
                </Typography>
            </Grid>
            <Grid item xs={12} paddingBottom={3}>
                <Typography sx={{paddingLeft: '62px', fontSize: '24px'}}>
                    {personData.nama}
                </Typography>
            </Grid>
            {/* DATA */}
            <Grid item>
                <CalendarMonthIcon fontSize='large' sx={{padding: '10px'}}/>
            </Grid>
            <Grid item>
                <Typography variant='h4' sx={{padding: '6px'}}>
                    Tanggal Pelayanan
                </Typography>
            </Grid>
            <Grid item xs={12} paddingBottom={3}>
                <Typography sx={{paddingLeft: '62px', fontSize: '24px'}}>
                    {personData.tanggal}
                </Typography>
            </Grid>
            {/* DATA */}
            <Grid item>
                <TypeSpecimenIcon fontSize='large' sx={{padding: '10px'}}/>
            </Grid>
            <Grid item>
                <Typography variant='h4' sx={{padding: '6px'}}>
                    Jenis Pelayanan
                </Typography>
            </Grid>
            <Grid item xs={12} paddingBottom={3}>
                <Typography sx={{paddingLeft: '62px', fontSize: '24px'}}>
                    {personData.jenis}
                </Typography>
            </Grid>
            {/* DATA */}
            <Grid item>
                <KeyboardIcon fontSize='large' sx={{padding: '10px'}}/>
            </Grid>
            <Grid item>
                <Typography variant='h4' sx={{padding: '6px'}}>
                    Keterangan
                </Typography>
            </Grid>
            <Grid item xs={12} paddingBottom={3}>
                <Typography sx={{paddingLeft: '62px', fontSize: '24px'}}>
                    {personData.keterangan}
                </Typography>
            </Grid>
        </Grid>
        
    </Paper>
  )
}

export default Info