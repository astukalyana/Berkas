import React from 'react'
import { Box, Divider, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const steps = [
    { label: 'Penerimaan dan pemeriksaan berkas' },
    { label: 'Pembuatan tanda terima oleh petugas' },
    { label: 'Pendataan berkas' },
    { label: 'Verifikasi berkas oleh pendata' },
    { label: 'Penandatanganan berkas oleh Kepala Subbagian Tata Usaha dan Kepala UPT IV' },
    { label: 'Pengiriman berkas ke kantor pusat BAPENDA Kabupaten Tangerang untuk diproses lebih lanjut' },
    { label: 'SPPT anda telah jadi' },
]

const Progress = ({ dataBerkas }) => {

  return (
    <>
        <Typography variant='h4' align='center' padding={3}>{dataBerkas.nomor_pelayanan}</Typography>
        <Divider variant='middle'/>
        <Box padding={6}>
            <Stepper activeStep={dataBerkas.proses} orientation='vertical'>
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