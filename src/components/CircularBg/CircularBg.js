import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';


import { CircleBg } from './styles/miniStyles';
import Theoderic from '../../assets/theo.png';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    iconBtn: {
        marginRight:40,
    },
    titleBox: {
      marginLeft:40,
      display:'flex',
      flexDirection:'row'
    },
    headerText: {
        fontFamily: 'Roboto Mono',
        fontSize:46,
        color:'white',      
    },
   

}))


function CircularBg({expYears, title, width}) {
    const classes = useStyles();
    return (
                
            <CircleBg>
             
            </CircleBg>
       
        
    )
}

export default CircularBg;
// #2d2e32
//#25262a