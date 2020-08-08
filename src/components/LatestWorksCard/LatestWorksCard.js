import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';


import { RectangularCard } from './styles/miniStyles';
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


function CircularBg({technologies, appName, link, image}) {
    const classes = useStyles();
    return (
                
            <RectangularCard>
           <div style={{display:'flex', flexDirection:'row', paddingTop:30, paddingLeft:30}}>
             <h3 style={{color:'white', flex:1}}>{appName}</h3>
             <div style={{flexDirection:'row', justifyContent:'space-between'}}>
               {technologies.map((tech) => (

               
             <span style={{padding:5,
              height:30, 
              color:'#d6d8dc', 
              borderRadius:4, margin:5, fontSize:10, backgroundColor:'#4d4c52'}}>
                {tech}</span>             
             ))}
             </div>
             
           </div>
            <img src={image} width="80%" height={290} style={{outline:'none', marginLeft:'20%',borderTopLeftRadius:30}}/>
            </RectangularCard>
       
        
    )
}

export default CircularBg;
// #2d2e32
//#25262a