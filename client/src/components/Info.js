import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Divider, Grid, Paper, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PersonIcon from '@mui/icons-material/Person';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';

import Progress from './Progress';
import { getNopel } from '../actions/nopel';

const Info = () => {
  const params = useParams()
  const nopel = params.nopel
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNopel(nopel))
  }, [dispatch, nopel]);

  const dataBerkas = useSelector((state) => state.nopel)

  console.log(dataBerkas);


  return (
    <Container sx={{display: 'flex', justifyContent: 'center'}}>
        {!dataBerkas ? <Typography>NOT FOUND</Typography> : 
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
                            {dataBerkas.nama_pemohon}
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
                            {dataBerkas.tgl_pelayanan}
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
                            {dataBerkas.jenis_pelayanan}
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
                            {dataBerkas.keterangan}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider variant='middle'/>
                <Progress dataBerkas={dataBerkas}/>
            </Paper>
        }

    </Container>
  )
}

export default Info