import React, {useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import curve1 from '../Images/Login/curve1.svg';
import curve2 from '../Images/Login/curve2.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Input from '../Components/Input';
import { Button } from '@mui/material';

function Login() {
  const [step, setStep] = useState(0);
  const [bname, setBname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [gst, setGst] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  
  return (<div className='relative'>
    <Grid style={{minHeight:'100vh' }} container spacing={0}>
      <Grid style={{backgroundColor: '#1746A2'}} xs={6}>
        
      </Grid>
      <Grid className="relative" xs={6} >
      <Box className="rounded-3xl absolute z-20 bg-white" style={{left: '-10%', top: '50%', transform: 'translate(0, -50%)'}} sx={{ width: '100%' }}>
        <Card className='rounded-3xl' style={{borderRadius: '10px'}} variant="outlined">
          <CardContent style={{'padding': '3rem', borderRadius: '10px'}}>
          <Typography className='font-bold text-left py-4' variant="h6" component="h6">{step==0? "Welcom to Incart": "Get your business started"} </Typography>
          <Typography>{step==0? "Create your account and start selling on Incart":"Fill in your shop details for better connectivity" }</Typography>
          {step==0 && 
          <>
          <Input label="Business Name" type="text" value={bname} onChange={setBname} />
          <Input label="Phone" type="tel" value={phone} onChange={setPhone} />
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input label="Additional Contact" type="tel" value={contact} onChange={setContact} />
          <Input label="Password" type="password" value={password} onChange={setPassword} />
          <Input label="Aadhar Number" type="number" value={aadhar} onChange={setAadhar} />
          <div className='flex flex-row justify-end'>
          <Button onClick={()=>setStep(1)} variant="contained" color="primary">Next</Button>
          </div>
          </>}

          {step==1 &&
          <>
          <Input label="GST IN" type="text" value={gst} onChange={setGst} /> 
          <Input label="Address Line 1" type="text" value={address1} onChange={setAddress1} />
          <Input label="Address Line 2" type="text" value={address2} onChange={setAddress2} />
          <Input label="Address Line 3" type="text" value={address3} onChange={setAddress3} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Input label="City" type="text" value={city} onChange={setCity} />
            </Grid>
            <Grid item xs={6}>
              <Input label="State" type="text" value={state} onChange={setState} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Input label="Country" type="text" value={country} onChange={setCountry} />
            </Grid>
            <Grid item xs={6}>
              <Input label="Pincode" type="number" value={pincode} onChange={setPincode} />
            </Grid>
          </Grid>
          <div className='flex flex-row justify-between'>
          <Button onClick={()=>setStep(0)} variant="contained" color="primary">Back</Button>
          <Button variant="contained" color="primary">Submit</Button>
          </div>
          </>}
        </CardContent>
        </Card>
      </Box>
      </Grid>
    </Grid>
    <img src={curve1} width='100%' style={{position: 'absolute', bottom:'0', left:'0'}} alt="" />
    <img src={curve2} width='100%' style={{position: 'absolute', bottom:'0', left:'0'}} alt="" />

    </div>
  )
}

export default Login