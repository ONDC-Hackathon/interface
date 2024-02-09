import React, { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import curve1 from '../Images/Login/curve1.svg'
import curve2 from '../Images/Login/curve2.svg'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Input from '../Components/Input'
import { Button } from '@mui/material'
import ease from '../Images/Login/easy_to_use.svg'
import grow from '../Images/Login/grow.svg'
import buyers from '../Images/Login/more_buyers.svg'
import cost from '../Images/Login/zero_cost.svg'
import Benefits from '../Components/Benefits'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSeller } from '../Redux/services/auth.service';
import incartLogo from '../Images/incart_logo.png'

function Login() {

  const { loading, userInfo, error } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: null,
    password: null,
  })

  const handleUserChange = e => {
    const { name, value } = e.target;
    console.log(name, value)
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    await dispatch(loginSeller(user))
    navigate("/")
  }

  return (
    <div className="relative">
      <Grid style={{ minHeight: '100vh' }} container spacing={0}>
        <Grid className='flex flex-col' sx={{ backgroundColor: '#1746A2', padding: '3rem' }} xs={6}>
          <div style={{ paddingBottom: '3rem' }} className='flex flex-col'>
            <img src={incartLogo} style={{ maxWidth: '300px' }} alt="" />
            <Typography variant="p" sx={{
              color: '#aaaaaa',
            }} align='left' className="font-bold py-4">
              Grow your business with new customers on INCART network
            </Typography>
          </div>
          <div style={{ zIndex: '10' }}>
            <Benefits icon={buyers} heading={"More Buyers"} desc="Access to the entire buyer universe" />
            <Benefits icon={cost} heading={"Zero Cost"} desc="No upfront cost to get started" />
            <Benefits icon={ease} heading={"Easy to Use"} desc="Start selling in no time" />
            <Benefits icon={grow} heading={"Grow Your Business"} desc="Promote your business with your own webpage" />
          </div>
        </Grid>
        <Grid className="relative" xs={6}>
          <Box
            className="rounded-3xl absolute z-20 bg-white"
            style={{
              left: '-10%',
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
            sx={{ width: '100%' }}
          >
            <Card
              className="rounded-3xl"
              style={{ borderRadius: '10px' }}
              variant="outlined"
            >
              <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                <Typography
                  className="font-bold text-left py-4"
                  variant="h6"
                  component="h6"
                >
                  Welcome to Incart
                </Typography>
                <Typography>
                  Login to your account and start selling on Incart
                </Typography>

                <>
                  <Input
                    label="Username"
                    type="text"
                    value={user.username}
                    onChange={username => handleUserChange({ target: { name: 'username', value: username } })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={password => handleUserChange({ target: { name: 'password', value: password } })}
                  />
                  <div className="flex flex-col">
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                    <div>
                      Don't have an account? <Link to="/register">Register</Link>
                    </div>

                  </div>
                </>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <img
        src={curve1}
        width="100%"
        style={{ position: 'absolute', bottom: '0', left: '0' }}
        alt=""
      />
      <img
        src={curve2}
        width="100%"
        style={{ position: 'absolute', bottom: '0', left: '0' }}
        alt=""
      />
    </div>
  )
}

export default Login
