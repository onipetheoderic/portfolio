import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import RectangularCard from '../RectangularCard';
import IntroText from '../IntoText';

const useStyles = makeStyles((theme) => ({
    Introdivider: {
        width:"72%",
        marginTop:150,
        minHeight:300,
     
        alignSelf:'center',
        display:'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('sm')]: {
            width:'90%',
            flexWrap:'wrap'
          }, 

    },
    cardSpace: {
        width:'45%',
        minHeight:300,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('sm')]: {
            width:'100%'
          }, 
    },
    introSpace: {
        width:'40%',
        minHeight:300,
        [theme.breakpoints.down('sm')]: {
            width:'100%'
          }, 
    }
       

}))


function Introdivider(props) {
    const classes = useStyles();
    console.log("thisis the childre", props.children)
    return (
                
            <div className={classes.Introdivider}>
                <div className={classes.cardSpace}>
                    <RectangularCard title="Mobile App" count="15" description="Mobile Apps Created using React native and Flutter" />
                    <RectangularCard title="Front-End App" count="14" description="Frontend Apps Created using Reactjs Redux and Context Api"/>
                    <RectangularCard title="Completed Build" count="22" description="Applications Developed Completely by me"/>
                </div>
                <div className={classes.introSpace}>
                    <IntroText />
                </div>
            </div>
       
        
    )
}

export default Introdivider;
// #2d2e32
//#25262a