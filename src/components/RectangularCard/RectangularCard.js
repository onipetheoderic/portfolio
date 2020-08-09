import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CurvedRectangularCard, ParaText, ParaCount, ParaDescription } from './styles/miniStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faCode, faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme) => ({
   
    pTitle: {
        fontSize:20,
        color:'#63f3ac',
        
    },
    recContainer: {
        marginLeft:50,
        marginTop:23,
        [theme.breakpoints.down('sm')]: {
            marginLeft:20,
            marginTop:20
          }, 
    },
    iconDashboardText: {
        fontSize:15,
        color:'#63f3ac',
        position: 'absolute',
        right:20,
        top:30
        
    }

}))


function RectangularCard({title, description, count}) {
    const classes = useStyles();
    return (
        <CurvedRectangularCard>
            <FontAwesomeIcon icon={faCode} className={classes.iconDashboardText} />
            <div className={classes.recContainer}>
                <ParaText>{title}</ParaText>
                <ParaDescription>{description}</ParaDescription>

                <ParaCount>{count} Project</ParaCount>
            </div>
           
        </CurvedRectangularCard>                   
    )
}

export default RectangularCard;
// #2d2e32
//#25262a