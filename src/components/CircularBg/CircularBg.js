import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';


import { CircleBg } from './styles/miniStyles';
import Typing from 'react-typing-animation';

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
   typingStyle: {
    color:'white',textAlign:'center', alignSelf:'center', fontFamily:'Cousine'
   }

}))


function CircularBg({expYears, title, width}) {
    const classes = useStyles();
    return (
                
            <CircleBg>
               <Typing>
               <h1 className={classes.typingStyle}>I am a Magacian....</h1>
                <Typing.Delay ms={1000} />
                <h1 className={classes.typingStyle}>I do the following Tricks:</h1>
                <Typing.Delay ms={1000} />
                <h1 className={classes.typingStyle}>Reactjs</h1>
                <Typing.Reset count={2} delay={500} />
                <h1 className={classes.typingStyle}>React Native</h1>
                <Typing.Reset count={3} delay={500} />
                <h1 className={classes.typingStyle}>Svelte</h1>
                <Typing.Reset count={4} delay={500} />
                <h1 className={classes.typingStyle}>Node Express</h1>
                <Typing.Reset count={5} delay={500} />
                <h1 className={classes.typingStyle}>Javascript</h1>
                <Typing.Reset count={6} delay={500} />
                <h1 className={classes.typingStyle}>Html5/Css</h1>
                <Typing.Reset count={7} delay={500} />
                <h1 className={classes.typingStyle}>Jquery</h1>
                <Typing.Reset count={8} delay={500} />
                <h1 className={classes.typingStyle}>Redux and ContextApi</h1>
                <Typing.Reset count={9} delay={500} />
                <h1 className={classes.typingStyle}>Firebase</h1>
                <Typing.Reset count={11} delay={500} />
                <h1 className={classes.typingStyle}>TDD</h1>
                <Typing.Reset count={12} delay={500} />
                <h1 className={classes.typingStyle}>Ruby on Rails</h1>
                <Typing.Reset count={13} delay={500} />
                <h1 className={classes.typingStyle}>Python</h1>
                <Typing.Reset count={14} delay={500} />
                <h1 className={classes.typingStyle}>Webscrapping</h1>
                <Typing.Reset count={15} delay={500} />
                <h1 className={classes.typingStyle}>Machine Learning</h1>
                <Typing.Reset count={16} delay={500} />
                <h1 className={classes.typingStyle}>Mongo Db</h1>
                <Typing.Reset count={17} delay={500} />
                <h1 className={classes.typingStyle}>MySql</h1>
                <Typing.Reset count={18} delay={500} />
                <h1 className={classes.typingStyle}>Postgres</h1>
                <Typing.Reset count={19} delay={500} />
                <h1 className={classes.typingStyle}>Docker</h1>
              </Typing>
             
            </CircleBg>
       
        
    )
}

export default CircularBg;
// #2d2e32
//#25262a