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
    introContainer: {
        width:'100%',
    },
    subtitle: {
        fontSize:22,
        color:'#ffffff',
        fontStyle:'italic'
    },
    title: {
        fontSize:31,
        color:'#ffffff',
        
    },
    theme: {
        fontFamily: 'Roboto Mono',
        fontSize:11,
        color:'#83838a',
       
    },
    description: {
        fontFamily: 'Roboto Mono',
        fontSize:12,
        lineHeight:1.7,
        color:'#a4a7b1',
    }
   

}))


function CircularBg({theme, title, subtitle, content}) {
    const classes = useStyles();
    return (
                
            <div className={classes.introContainer}>
                <p className={classes.theme}>Who Am I?</p>
                <p className={classes.title}>Hello! I am Theoderic Onipe</p>
                <p className={classes.subtitle}>Every great Design Begins with an even better story</p>
                <p className={classes.description}>Since beginning my Journey as a freelance software Engineer, nearly 8 years ago, 
                I have done remote work for Agencies, consulted for startups, 
                builts many apps, Written Complex Algorithms,
                and collaborated with talented people to create digital products for both 
                business and consumer use. I love using React Native for my Mobile Apps, even though flutter looks tempting 
                and I Love flutter too because of its structural paradigm,
                I use Reactjs and Svelte for my Frontend design and Enzyme and 
                Jest for Testing.
                I use Nodejs and Mongodb for my backend, and Ruby for website scrapping because of the power of Nokogiri and Watir.
                
                 </p>
            </div>
       
        
    )
}

export default CircularBg;
// #2d2e32
//#25262a