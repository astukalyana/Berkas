import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Paper, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/logo.svg'; // Update the path to your logo
import { styled } from '@mui/material/styles';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0px 6px 12px rgba(0, 0, 0, 0.1)`,
  background: '#ffffff', // White background
  maxWidth: 400,
  margin: 'auto',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: '#d1c4e9', // Soft purple background for logo
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`, // Subtle shadow
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: '#6a1b9a', // Purple label color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b39ddb', // Light purple border color
    },
    '&:hover fieldset': {
      borderColor: '#9c27b0', // Medium purple on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6a1b9a', // Dark purple when focused
    },
  },
  '& .MuiInputBase-input': {
    color: '#333', // Dark grey text color
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#9c27b0', // Medium purple background
  color: '#fff', // White text color
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`, // Subtle shadow
  '&:hover': {
    backgroundColor: '#8e24aa', // Darker purple on hover
  },
}));

function LandingPage() {
    const [nopelId, setNopelId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nopelId.trim()) {
            navigate(`/nopel/${nopelId}`);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#f4e8f4', // Very light purple background for the whole page
                padding: 0,
                margin: 0,
            }}
        >
            <StyledPaper elevation={3}>
                <StyledAvatar>
                    <img src={Logo} alt="Logo" style={{ width: 60, height: 60 }} />
                </StyledAvatar>
                <Typography variant="h5" gutterBottom sx={{ color: '#6a1b9a', fontWeight: 'bold' }}>
                    Portal Nopel
                </Typography>
                <Typography variant="body2" align="center" sx={{ color: '#666', mb: 2 }}>
                    Masukkan Nomor Pelayanan untuk mendapatkan informasi.
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 2 }}>
                    <StyledTextField
                        margin="normal"
                        required
                        fullWidth
                        id="nopelId"
                        label="Nomor Pelayanan"
                        name="nopelId"
                        autoComplete="nopelId"
                        autoFocus
                        value={nopelId}
                        onChange={(e) => setNopelId(e.target.value)}
                    />
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Kirim
                    </StyledButton>
                </Box>
            </StyledPaper>
        </Box>
    );
}

export default LandingPage;
