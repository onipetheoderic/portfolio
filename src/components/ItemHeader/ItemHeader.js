import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailOutline from '@material-ui/icons/MailOutline';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faCode, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  iconWithText: {
    fontSize:12,
    marginLeft:20,
    fontFamily: 'Cousine'
  },
  iconText: {
    fontSize:10,
    paddingLeft:5,
    fontFamily: 'Cousine'
  },
  iconBtn: {
      marginRight:40,
      fontFamily: 'Cousine'
  },
  titleBox: {
    marginLeft:40,
    display:'flex',
    flexDirection:'row'
  },
  titleBold: {
    fontSize:26,
    fontWeight:'bold',
    fontFamily:'Montserrat',
    color:'white'
  },
  //Montserrat', 'Prompt', 'Dosis','Cousine
  titleRegular: {
    fontSize:25,
    fontFamily:'Montserrat',
    marginLeft:5,
    color:'white'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  linkStyle: {
    color:'white',
    textDecoration:'none'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  itemStyle: {
    fontSize:12,
    marginLeft:40,
    color:'white',
    
  },
  linkItemStyle: {
    textDecoration:'none',
    fontFamily: 'Cousine',
    color:'white',
  },
  appStyle: {
    backgroundColor:'transparent',
    boxShadow:'none',
    marginTop:50
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
 
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >   
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <MailOutline />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
         
          </IconButton>
          <Box className={classes.titleBox}>
            <Typography className={classes.titleBold} variant="h6" noWrap>
                Theoderic
            </Typography>
            <Typography className={classes.titleRegular} variant="h6" noWrap>
                Onipe
            </Typography>
          </Box>
          <div className={classes.grow} />
          <Box className={classes.titleBox}>
            <Typography className={classes.itemStyle} variant="h6" noWrap>
                Who am I
            </Typography>
            
            <Typography className={classes.itemStyle} variant="h6" noWrap>
                Works
            </Typography>

            
            {/* <a href="mailto:info@Lasretrad.com" style={{textDecoration:'none', color:'inherit'}}> Contact </a> */}
            <Typography className={classes.itemStyle} variant="h6" noWrap>
               <a href="mailto:onipetheoderic@gmail.com" target="blank" className={classes.linkItemStyle}>Contracts</a>
            </Typography>
          </Box>
          <div className={classes.grow} />
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
          
         
            <IconButton
              edge="end"
              aria-label="account of current user"
             
              className={classes.iconBtn}
              color="inherit"
            >
                 <FontAwesomeIcon icon={faGithub} className={classes.iconWithText} />
                 <span className={classes.iconText}>
                   <a className={classes.linkStyle} 
                   href="https://github.com/onipetheoderic" target="blank">github</a></span>
                  
                  <FontAwesomeIcon icon={faLinkedin} className={classes.iconWithText} />
                  <span className={classes.iconText}>
                    <a className={classes.linkStyle} 
                    target="blank"
                    href="https://linkedin.com/in/onipe-theoderic-987642158">linkedIn</a></span>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
