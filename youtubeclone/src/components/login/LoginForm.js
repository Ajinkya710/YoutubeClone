import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email + " --> " + password)
    }

    return (
        <>
            <Box sx={{ textAlign:'center', width:'40%', margin:'auto'}}>
            <Paper elevation={3}>
                <h2>Login Form</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding:'20px'}} onSubmit={handleSubmit}>

                    <TextField value={email} type="email" id="userid" label="Email id" variant="outlined" required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }
                        } />

                    <TextField value={password} type="password" id="password" label="Password" variant="outlined" required
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }
                        } />

                    <Button variant="contained" color='success' type='submit'>Submit</Button>
                    <p>Don't have an account yet? go to <Link href={'/register'}>Register</Link></p>
                </form>
            </Paper>
            </Box>
        </>
    )
}

export default LoginForm
