import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

const ProfileField = ({ label, value }) => {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor="bootstrap-input">
        {label}
      </InputLabel>
      <BootstrapInput value={value} readOnly={true} />
    </FormControl>
  )
}

function Profile() {
  const { userInfo, sellerInfo } = useSelector((state) => state.auth)

  return (
    <div className="container p-4 ">
      <header className="text-start">
        <h1 className="text-2xl font-bold">
          {userInfo.first_name + ' ' + userInfo.last_name}
        </h1>
        <p className="text-gray-400">Business Name</p>
      </header>

      <section className="my-10 text-start">
        <h2 className="text-l mb-4">Personal Info</h2>
        <Card
          variant="outlined"
          className="p-8"
          sx={{
            backgroundColor: 'transparent',
            borderStyle: 'dashed',
            borderRadius: 4,
            borderWidth: 3,
          }}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <ProfileField label="First Name" value={userInfo.first_name} />
            <ProfileField label="Last Name" value={userInfo.last_name} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <ProfileField label="Email" value={userInfo.email} />
            <ProfileField label="Mobile No." value={sellerInfo.phone} />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <ProfileField label="Aadhar Number" value={sellerInfo.aadhaar} />
          </div>
        </Card>
      </section>

      <section className="text-start mb-10">
        <h2 className="text-l mb-4">Business Info</h2>
        <Card
          variant="outlined"
          className="p-8"
          sx={{
            backgroundColor: 'transparent',
            borderStyle: 'dashed',
            borderRadius: 4,
            borderWidth: 3,
          }}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <ProfileField label="Business Name" value={userInfo.username} />
            <ProfileField label="GSTIN" value={sellerInfo.gstin} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <ProfileField label="Country" value={sellerInfo.country} />
            <ProfileField label="State" value={sellerInfo.state} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <ProfileField label="City" value={sellerInfo.city} />
            <ProfileField label="Pin Code" value={sellerInfo.pincode} />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <ProfileField
              label="Address Line 1"
              value={sellerInfo.address_line_1}
            />
            <ProfileField
              label="Address Line 2"
              value={sellerInfo.address_line_2}
            />
            <ProfileField
              label="Address Line 3"
              value={sellerInfo.address_line_3}
            />
          </div>
        </Card>
      </section>
    </div>
  )
}

export default Profile
