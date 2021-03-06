import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
  appStyle: {
        backgroundColor:'transparent',
        boxShadow:'none',
        marginTop:50
      },
  title: {
    
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontWeight:'bold'
    },
  },
    linkStyle: {
    color:'white',
    textDecoration:'none'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
    iconText: {
    fontSize:10,
    paddingLeft:5,
    fontFamily: 'Cousine'
  },
    linkItemStyle: {
    textDecoration:'none',
    fontFamily: 'Cousine',
    color:'white',
  },
    itemStyle: {
    fontSize:12,
    marginLeft:40,
    color:'white',
    
  },
    iconWithText: {
    fontSize:12,
    marginLeft:20,
    fontFamily: 'Cousine'
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
    fontFamily: 'Cousine',
    color:'white',
    
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems:'center'
    },
  },
    iconBtn: {
      marginRight:40,
      fontFamily: 'Cousine'
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
        
        <p>Who Am I</p>
      </MenuItem>
      <MenuItem>
        
        <p>Contact</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appStyle}>
        <Toolbar>
        
          <Typography className={classes.title} variant="h6" >
          Theoderic <span style={{fontWeight:"400"}}>Onipe</span>
          </Typography>
          <div className={classes.search}>
           
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
            <Typography className={classes.itemStyle} variant="h6" noWrap>
                 <a className={classes.linkItemStyle} href="#whoami">Who am I</a> 
             </Typography>
             <Typography className={classes.itemStyle} variant="h6" noWrap>
             <a className={classes.linkItemStyle} href="#works">Works</a>
             </Typography>
            <Typography className={classes.itemStyle} variant="h6" noWrap>
                <a href="mailto:onipetheoderic@gmail.com" target="blank" className={classes.linkItemStyle}>Contracts</a>
             </Typography>

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
               <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}



