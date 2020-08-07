import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    bottomBg: {
        width:"100%",
        minHeight:300,
        backgroundColor: "#25262a",
        display:'flex',
        justifyContent:'center'
    }
       

}))


function BottomBg(props) {
    const classes = useStyles();
    return (
                
            <div className={classes.bottomBg}>
                {props.children}
            </div>
       
        
    )
}

export default BottomBg;
// #2d2e32
//#25262a