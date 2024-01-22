import React, { useState } from 'react'
import { Box, Container, Divider, Grid, Icon, IconButton, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'

const steps = [
    { label: 'Penerimaan dan pemeriksaan berkas' },
    { label: 'Pembuatan tanda terima oleh petugas' },
    { label: 'Pendataan berkas' },
    { label: 'Verifikasi berkas oleh pendata' },
    { label: 'Penandatanganan berkas oleh Kepala Subbagian Tata Usaha dan Kepala UPT IV' },
    { label: 'Pengiriman berkas ke kantor pusat BAPENDA Kabupaten Tangerang untuk diproses lebih lanjut' },
    { label: 'SPPT anda telah jadi' },
]

const Progress = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const [personData, setPersonData] = useState({
    'nama': 'Gabriel Damar Astukalyana Saroy',
    'tanggal': '23 September 2023',
    'jenis': 'Mutasi Sebagian',
    'keterangan': 'Mutasi sebagian dari Muhammad Marwan ke Gabriel Damar Astukalyana Saroy LT/LB 224/120',
    'nopel': 'WIJK3412391'
  })

  return (
    <>
        <Typography variant='h4' align='center' padding={3}>{personData.nopel}</Typography>
        <Divider variant='middle'/>
        <Box padding={6}>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            <Typography paddingLeft={1} sx={{fontSize: '20px'}}>
                                {step.label}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    </>
  )
}

export default Progress