import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'

// Import icons
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'

const useDynamicTitleStyles = () => {
  const location = useLocation()
  const getTitle = (pathname) => {
    const pathSegments = pathname.split('/').filter(Boolean)
    return pathSegments.length === 0
      ? 'Dashboard'
      : pathSegments[pathSegments.length - 1]
          .replace(/-/g, ' ')
          .replace(/:/g, '')
          .replace(/\b\w/g, (char) => char.toUpperCase())
  }
  const title = React.useMemo(() => getTitle(location.pathname), [location])
  return title
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)({
  '& .MuiInputBase-input': {
    paddingLeft: 'calc(1em + 32px)',
    width: '100%',
  },
})

const Header = () => {
  const title = useDynamicTitleStyles()
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(
          `An error occurred while trying to switch to fullscreen mode: ${e.message} (${e.name})`,
        )
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((e) => {
          console.error(
            `An error occurred while trying to exit fullscreen mode: ${e.message} (${e.name})`,
          )
        })
        setIsFullscreen(false)
      }
    }
  }

  return (
    <AppBar position="sticky" className="bg-white shadow-ultra-light pt">
      <Toolbar className="justify-between bg-white">
        <Search className="bg-gray-200">
          <SearchIconWrapper>
            <SearchIcon className="text-black" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <div>
          <IconButton
            aria-label="toggle fullscreen"
            className="text-black"
            onClick={handleToggleFullscreen}
          >
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
          <IconButton aria-label="toggle night mode" className="text-black">
            <Brightness4Icon />
          </IconButton>
          <IconButton
            aria-label="show 17 new notifications"
            className="text-black"
          >
            <NotificationsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
