import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { withRouter } from 'react-router-dom';

const Header = (props) => {
  const { history } = props;
  
  const handleButtonClick = (pageURL) => {
    history.push(pageURL)
  };

  return (
    <Box color='secondary'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Micro Dashboard
          </Typography>
            <div>
              <Button variant='contained' color="secondary" onClick={() => handleButtonClick('/')}>Home</Button>
              <Button variant='contained' color="secondary" onClick={() => handleButtonClick('/all')}>Tabla</Button>
              <Button variant='contained' color="secondary" onClick={() => handleButtonClick('/hours')}>Users</Button>
              <Button variant='contained' color="secondary" onClick={() => handleButtonClick('/nodes')}>Nodes</Button>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(Header)