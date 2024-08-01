import React, { useEffect, useState } from 'react';
import { Typography, Box, Paper, CircularProgress, Divider, Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '8px',
  boxShadow: `0px 6px 12px rgba(0, 0, 0, 0.1)`,
  background: '#ffffff',
  maxWidth: 800,
  margin: 'auto',
  border: '2px solid #000',
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  color: '#6a1b9a',
  fontWeight: 700,
  fontSize: '2.5rem',  // Increased font size
  marginBottom: theme.spacing(2),
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  color: '#8e24aa',
  fontWeight: 500,
  fontSize: '1.5rem',  // Increased font size
  marginBottom: theme.spacing(1),
}));

const InfoBox = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '8px',
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  border: '1px solid #000',
  marginBottom: theme.spacing(2),
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#f4e8f4',
  padding: 0,
  margin: 0,
}));

const ErrorPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#ffffff',
  border: '1px solid #d1c4e9',
  boxShadow: `0px 6px 12px rgba(0, 0, 0, 0.1)`,
}));

const steps = [
  { label: 'Penerimaan dan pemeriksaan berkas' },
  { label: 'Pembuatan tanda terima oleh petugas' },
  { label: 'Pendataan berkas' },
  { label: 'Verifikasi berkas oleh pendata' },
  { label: 'Penandatanganan berkas oleh Kepala Subbagian Tata Usaha dan Kepala UPT IV' },
  { label: 'Pengiriman berkas ke kantor pusat BAPENDA Kabupaten Tangerang untuk diproses lebih lanjut' },
  { label: 'SPPT anda telah jadi' },
];

const StyledStepperBox = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '8px',
  padding: theme.spacing(2),
  border: '1px solid #000',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

function DocumentPage() {
  const { nopelId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://berkas-production.up.railway.app/nopel/${nopelId}`);
        if (!response.ok) {
          throw new Error('Nopel tidak ditemukan');
        }
        const result = await response.json();
        if (result === null) {
          throw new Error('Nopel tidak ditemukan');
        }
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nopelId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#f4e8f4',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorPaper>
          <Typography variant="h5" align="center" sx={{ color: '#d32f2f' }}>
            {error}
          </Typography>
        </ErrorPaper>
      </ErrorContainer>
    );
  }

  if (!data) {
    return (
      <ErrorContainer>
        <ErrorPaper>
          <Typography variant="h5" align="center" sx={{ color: '#d32f2f' }}>
            Data tidak ditemukan
          </Typography>
        </ErrorPaper>
      </ErrorContainer>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f4e8f4', minHeight: '100vh', padding: 2 }}>
      <StyledPaper>
        <TitleTypography variant="h4">Informasi Nopel</TitleTypography>
        <InfoBox>
          <SubtitleTypography variant="h6">Nomor Pelayanan</SubtitleTypography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>{data.nomor_pelayanan}</Typography>
        </InfoBox>
        <InfoBox>
          <SubtitleTypography variant="h6">Tanggal Pelayanan</SubtitleTypography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>{new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          }).format(new Date(data.tgl_pelayanan))}</Typography>
        </InfoBox>
        <InfoBox>
          <SubtitleTypography variant="h6">Nama Pemohon</SubtitleTypography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>{data.nama_pemohon}</Typography>
        </InfoBox>
        <InfoBox>
          <SubtitleTypography variant="h6">Nomor Objek Pajak (NOP)</SubtitleTypography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>{data.nop}</Typography>
        </InfoBox>
        <InfoBox>
          <SubtitleTypography variant="h6">Jenis Pelayanan</SubtitleTypography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>{data.jenis_pelayanan}</Typography>
        </InfoBox>
        <Divider sx={{ my: 2 }} />
        <StyledStepperBox>
          <Typography variant='h6' align='center' paddingBottom={2} sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6a1b9a' }}>
            Proses Berkas
          </Typography>
          <Stepper activeStep={data.proses} orientation='vertical'>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <Typography paddingLeft={1} sx={{ fontSize: '1rem', fontWeight: '400', fontFamily: 'Roboto, sans-serif' }}>
                    {step.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </StyledStepperBox>
      </StyledPaper>
    </Box>
  );
}

export default DocumentPage;
