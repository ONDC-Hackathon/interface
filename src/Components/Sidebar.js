import * as React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AddBoxIcon from '@mui/icons-material/AddBox'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate, useLocation } from 'react-router-dom'
import incartLogo from '../Images/incart_logo.png'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/features/auth.slice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useTheme()
  const location = useLocation()
  const [isOpen, setIsOpen] = React.useState(true)
  const [isActiveTab, setIsActiveTab] = React.useState(0)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  React.useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleTabClick = (path, index) => {
    setIsActiveTab(location.pathname === path ? index : -1)
    navigate(path)
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const drawerWidthOpen = 240
  const drawerWidthClosed = 60

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Products', icon: <ShoppingCartIcon />, path: '/products' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
    { text: 'Add product', icon: <AddBoxIcon />, path: '/addproduct' },
  ]

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidthOpen : drawerWidthClosed,
        transition: 'width 0.3s',
        '& .MuiDrawer-paper': {
          width: isOpen ? drawerWidthOpen : drawerWidthClosed,
          backgroundColor: '#303F9F',
          color: 'white',
          transition: 'width 0.3s',
          overflowX: 'hidden',
        },
      }}
    >
      <IconButton
        edge="start"
        aria-label="menu"
        sx={{
          m: 0,
          display: isOpen ? 'none' : 'flex',
          color: 'inherit',
        }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <img
        src={incartLogo}
        alt=""
        className="self-center mb-10 mt-2"
        style={{ width: isMobile ? '70%' : 'auto' }}
      />
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleTabClick(item.path, index)}
            sx={{
              display: 'flex',
              justifyContent: isOpen ? 'initial' : 'center',
              backgroundColor: isActiveTab === index ? 'darkblue' : '',
              '& .MuiListItemText-primary': {
                fontWeight: isActiveTab === index ? 'bold' : '',
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                mr: isOpen ? 2 : 'auto',
                color: 'inherit',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ display: isOpen ? 'block' : 'none', color: 'inherit' }}
            />
          </ListItem>
        ))}
      </List>
      <List sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <ListItem button key="Logout" onClick={handleLogout}>
          <ListItemIcon
            sx={{ minWidth: 'auto', mr: isOpen ? 2 : 'auto', color: 'inherit' }}
          >
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{ display: isOpen ? 'block' : 'none', color: 'inherit' }}
          />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
