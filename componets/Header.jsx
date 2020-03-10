import React from 'react';
import { Typography, Button, Toolbar, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';
import theme from './theme';

const useStyles = makeStyles(theme =>({
  toolbar : {
    borderBottom: `1px solid ${theme.palette.divider}`  
  },
  toolbartitle:{
    flex:1  
  },
  toolbarSecondary:{
    justifyContent:'space-between',
    oferflowX:'auto'  
  },
  toolbarLink:{
    padding :theme.spacing(1),
    flexShrink: 0  
  }  
}));

const Header =()=> {
  const classes = useStyles();
  return (
    <AppBar position="static">
     <Toolbar className={classes.toolbar}>
       <Button color="inherit" size="small">
         Suscribe  
       </Button>

       <Typography
         component="h2"
         vriant="h5"
         align="center"
         color="inherit"
         noWrap
         className={classes.toolbarTitle}
       >
       </Typography>   
     </Toolbar> 
     

    </AppBar>  
  )  
}