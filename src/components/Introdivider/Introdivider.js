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
        justifyContent:'space-between'

    },
    cardSpace: {
        width:'40%',
       
        minHeight:300,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    introSpace: {
        width:'40%',
        minHeight:300,
    }
       

}))


function Introdivider(props) {
    const classes = useStyles();
    console.log("thisis the childre", props.children)
    return (
                
            <div className={classes.Introdivider}>
                <div className={classes.cardSpace}>
                    <RectangularCard />
                    <RectangularCard />
                    <RectangularCard />
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