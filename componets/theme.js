import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
// Create a theme instance.

const theme = createMuiTheme({
    palette: {
     primery :{
      main: '#283E4A',
     },
     secondary :{
        main :'#19857b',
     },
     error: {
         main:red.A400,
     },
     bacckground :{
         default : '#F5F5F5'
     },
    },
});

export default theme;