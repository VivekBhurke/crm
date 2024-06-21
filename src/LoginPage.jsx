import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, CssBaseline, Avatar, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import './App.css'; // Import the CSS file with styles

const theme = createTheme();

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = 'https://av-digital-solutions.onrender.com/evee-backend/v1/auth/login-with-email-password';

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Login successful:', jsonResponse);
                // Handle the response as needed
            } else {
                const errorResponse = await response.json();
                console.error('Login failed:', errorResponse);
                // Handle error response as needed
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network errors as needed
        }
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login successful:', response);
        // Handle the Google login response as needed
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google login failed:', error);
        // Handle the Google login failure as needed
    };



    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <ThemeProvider theme={theme}>
                <div className="blur-background"></div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        className="login-form-container"
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            className="login-form"
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1, p: 3 }}
                        >
                            <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main', mb: 2 }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onFailure={handleGoogleLoginFailure}
                                buttonText="Sign in with Google"
                                render={(renderProps) => (
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        sx={{ mt: 1, mb: 1 }}
                                    >
                                        Sign in with Google
                                    </Button>
                                )}
                            />
                           
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
};

export default LoginPage;
