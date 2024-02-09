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
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerSeller } from '../Redux/services/auth.service';
import incartLogo from '../Images/incart_logo.png'

function Register() {
    const { loading, userInfo, error } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogin = useCallback(() => {
        navigate('/login')
    })

    const [step, setStep] = useState(0)

    const [user, setUser] = useState({
        username: null,
        password: null,
        first_name: null,
        last_name: null,
        email: null
    })

    const [seller, setSeller] = useState({
        phone: null,
        aadhaar: null,
        gstin: null,
        address_line_1: null,
        address_line_2: null,
        address_line_3: null,
        city: null,
        state: null,
        country: null,
        pincode: null,
        additional_contact: null
    })

    const handleUserChange = e => {
        const { name, value } = e.target;
        console.log(name, value)
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSellerChange = e => {
        const { name, value } = e.target;
        console.log(name, value)
        setSeller(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async () => {
        dispatch(registerSeller({ user, seller }))
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
                                    {step == 0 ? 'Welcom to Incart' : 'Get your business started'}{' '}
                                </Typography>
                                <Typography>
                                    {step == 0
                                        ? 'Create your account and start selling on Incart'
                                        : 'Fill in your shop details for better connectivity'}
                                </Typography>
                                {step == 0 && (
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
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="First Name"
                                                    type="text"
                                                    value={user.first_name}
                                                    onChange={first_name => handleUserChange({ target: { name: 'first_name', value: first_name } })}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="Last Name"
                                                    type="text"
                                                    value={user.last_name}
                                                    onChange={last_name => handleUserChange({ target: { name: 'last_name', value: last_name } })}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="Phone"
                                                    type="tel"
                                                    value={seller.phone}
                                                    onChange={phone => handleSellerChange({ target: { name: 'phone', value: phone } })}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="Email"
                                                    type="email"
                                                    value={user.email}
                                                    onChange={email => handleUserChange({ target: { name: 'email', value: email } })}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Input
                                            label="Aadhar Number"
                                            type="text"
                                            value={seller.aadhaar}
                                            onChange={aadhaar => handleSellerChange({ target: { name: 'aadhaar', value: aadhaar } })}
                                        />
                                        <Input
                                            label="GST IN"
                                            type="text"
                                            value={seller.gstin}
                                            onChange={gstin => handleSellerChange({ target: { name: 'gstin', value: gstin } })}
                                        />
                                        <div className="flex flex-row justify-end">
                                            <Button
                                                onClick={() => setStep(1)}
                                                variant="contained"
                                                color="primary"
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {step == 1 && (
                                    <>
                                        <Input
                                            label="Address Line 1"
                                            type="text"
                                            value={seller.address_line_1}
                                            onChange={address_line_1 => handleSellerChange({ target: { name: 'address_line_1', value: address_line_1 } })}
                                        />
                                        <Input
                                            label="Address Line 2"
                                            type="text"
                                            value={seller.address_line_2}
                                            onChange={address_line_2 => handleSellerChange({ target: { name: 'address_line_2', value: address_line_2 } })}
                                        />
                                        <Input
                                            label="Address Line 3"
                                            type="text"
                                            value={seller.address_line_3}
                                            onChange={address_line_3 => handleSellerChange({ target: { name: 'address_line_3', value: address_line_3 } })}
                                        />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="City"
                                                    type="text"
                                                    value={seller.city}
                                                    onChange={city => handleSellerChange({ target: { name: 'city', value: city } })}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="State"
                                                    type="text"
                                                    value={seller.state}
                                                    onChange={state => handleSellerChange({ target: { name: 'state', value: state } })}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="Country"
                                                    type="text"
                                                    value={seller.country}
                                                    onChange={country => handleSellerChange({ target: { name: 'country', value: country } })}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Input
                                                    label="Pincode"
                                                    type="number"
                                                    value={seller.pincode}
                                                    onChange={pincode => handleSellerChange({ target: { name: 'pincode', value: pincode } })}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Input
                                            label="Additional Contact"
                                            type="tel"
                                            value={seller.additional_contact}
                                            onChange={additional_contact => handleSellerChange({ target: { name: 'additional_contact', value: additional_contact } })}
                                        />
                                        <div className="flex flex-row justify-between">
                                            <Button
                                                onClick={() => setStep(0)}
                                                variant="contained"
                                                color="primary"
                                            >
                                                Back
                                            </Button>
                                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                                Submit
                                            </Button>
                                        </div>
                                    </>
                                )}
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

export default Register
