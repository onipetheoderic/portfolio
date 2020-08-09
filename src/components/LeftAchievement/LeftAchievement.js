import React from 'react';
import {Spring} from 'react-spring/renderprops';
import { fade, makeStyles } from '@material-ui/core/styles';


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
    headerTextCont: {
        width:'40%'
    },
    pTextCont: {
        width: '30%'
    },
    coloredBgText: {
        backgroundColor:'#63f3ac',
        borderRadius:3,
        padding:5,
        paddingLeft: 10,
        paddingRight:10,
        fontWeight:'bold',
        fontSize:12,
    },
    achieve: {
        marginTop:120,
        width: 200,
        textTransform: 'uppercase',
    },
    pText: {
        color:'#83838a',
        fontSize:13,
        fontFamily: 'Roboto Mono',
    },
    uTextCont: {
        marginTop:100,
        width: '30%'
    },
    uText: {
        color: '#63f3ac',
        textDecoration:'underline',
        textTransform: 'uppercase',
        fontFamily:'Roboto Mono',
        fontSize:17
    },
    achievementCont: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width: '22%'
    },
  
    singleAchievementText: {
        fontSize:35,
        textTransform: 'uppercase',
       
        color:'white'
    }

}))


function LeftAchievement({expYears, title, width}) {
    const classes = useStyles();
    return (
        <div className={classes.achieve}>            
            <div className={classes.achievementCont}>
                <h1 className={classes.singleAchievementText}>
                <Spring
  from={{ number: 1 }}
  to={{ number: expYears }}>
  {props => <div>{props.number}</div>}
</Spring>
                </h1>
                <h1
                 style={{fontSize:12,
                    textTransform: 'uppercase',
                    marginLeft:10,
                    alignSelf:'center',
                    color:'#83838a', width:width}}>
                    {title} 
                </h1>
            </div>
                 
        </div>
        
    )
}

export default LeftAchievement;
// #2d2e32
//#25262a