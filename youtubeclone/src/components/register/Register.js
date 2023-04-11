import React, {useState} from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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
        <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Register</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '20px' }} onSubmit={handleSubmit}>
          <TextField value={firstName} type="text" id="firstname" label="First Name" variant="outlined" required
          onChange={(e) => {
            setFirstName(e.target.value);
        }
        } />
          <TextField value={lastName} type="text" id="lastname" label="Last Name" variant="outlined" required
          onChange={(e) => {
            setLastName(e.target.value);
        }
        } />
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
          <Button variant="contained" color='success' type='submit'>Register</Button>
          <p>Already have an account? go to <Link href={'/'}>Login</Link></p>
        </form>
      </Paper>
      </Box>
    </>
  )
}

export default Register
