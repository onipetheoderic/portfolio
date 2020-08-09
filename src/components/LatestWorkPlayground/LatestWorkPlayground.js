import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import LatestWorksCard from '../LatestWorksCard';

const useStyles = makeStyles((theme) => ({
    latestPlayground: {
        display:'flex',     
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        
        backgroundColor:'#25262a'
    },
    latestPlaygroundRow: {
        marginBottom:100,
        marginTop:100,
        flexDirection:'row',
        display:'flex',
        width:'80%',
        minHeight:300,
        alignSelf:'center',
        flexWrap: 'wrap',
        justifyContent:'space-between'
        
    },
    cardTStyle: {
        width:'48%',                     
        height:400, 
        marginTop:10,
        [theme.breakpoints.down('sm')]: {
            width:'100%'
          }, 
    },

}))


function LatestWorkPlayground(props) {
    

    const positioner = (itemIndex) => {
        if(itemIndex%2==0){
            return 60
        }
        else return 0
    }
    const classes = useStyles();

    return (
    <div style={{backgroundColor:'#25262a', boxSizing:'border-box'}}>
        <div>
        
            <div style={{ backgroundColor:'#25262a', display:'flex',alignItems:'center', justifyContent:'center'}}>
            <p style={{fontSize:20, color:'white', marginTop:50, fontFamily:'Montserrat', alignSelf:'center'}}>Latest Works</p>
            </div>

            <div className={classes.latestPlayground}>
                
              <div className={classes.latestPlaygroundRow}>
                  {props.children.map((card, index)=>(
                    <div className={classes.cardTStyle}>
                    {card}
                    </div>
                  ))}
              
                
              </div>
            </div>
        </div>
    </div>
                        
    )
}

export default LatestWorkPlayground;
// #2d2e32
//#25262a