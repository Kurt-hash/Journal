import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link sx={{ mr: 2 }} component = {Button} color="inherit" href = '/'>Home</Link>
          <Link color="inherit" component = {Button} href = '/AboutUs'>About Us</Link>
          <Link sx={{ mr: 2 }} component = {Button} color="inherit" href = '/ProductInformation'>Product Information</Link>
          <Link sx={{ mr: 2 }} component = {Button} color="inherit" href = '/ContactUs'>ContactUs</Link>
          <Link sx={{ mr: 2 }} component = {Button} color="inherit" href = '/Journal'>Journal</Link>
          <Link sx={{ mr: 2 }} component = {Button} color="inherit" href = '/Task'>Task</Link>

          {/* Link style={{ textDecoration: 'none' }} className="nav-link" component={Button} variant='body2' color='inherit' href='/'>Home</Link>
                    <Link style={{ textDecoration: 'none' }} className="nav-link" component={Button} variant='body2' color='inherit' href='/AboutUs'>About Us</Link>
                    <Link style={{ textDecoration: 'none' }} className="nav-link" component={Button} variant='body2' color='inherit' href='/ProductInformation'>Product Information</Link> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
