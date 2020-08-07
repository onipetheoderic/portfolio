import React from 'react';
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
    jumbotron: {
        marginTop:150,
        marginLeft:'20%',
        
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
    }

}))


function LeftJumbotron({coloredBgText, bigHeaderText, description, underlinedText}) {
    const classes = useStyles();
    return (
        <div className={classes.jumbotron}>            
            <span className={classes.coloredBgText}>Front-End Developer</span>    
            <div className={classes.headerTextCont}>
                <h1 className={classes.headerText}>Talk is cheap. Show me the code </h1>  
            </div>
            <div className={classes.pTextCont}>
                <p className={classes.pText}>I constantly challenge myself to solve new problems. I love designing and bringing Prototypes to Life </p>
            </div>

            <div className={classes.uTextCont}>
                <p className={classes.uText}>Lets Chat </p>
            </div>
                 
        </div>
        
    )
}

export default LeftJumbotron;
// #2d2e32
//#25262a