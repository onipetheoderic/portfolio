import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import { useSpring, animated } from 'react-spring'
import { CircleBg } from './styles/miniStyles';


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
   parentDisplayStyle: {
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }, 
   }

}))


function CircularBg({image, topPosition, rightPosition, height, width}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const classes = useStyles();
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    return (
            <div className={classes.parentDisplayStyle}>
 <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans),position:'absolute', top:topPosition, right:rightPosition  }}>
                <img src={image} width={width} height={height} />
            </animated.div>
            </div>
           
       
        
    )
}

export default CircularBg;
// #2d2e32
//#25262a