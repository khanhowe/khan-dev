import React, {useState} from 'react';
import { AppBar, Button, List, Drawer, ListItem, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export default function NavBar(props) {
    const navBarClass = useNavBarStyles();
    return (
        <AppBar position="static" className={navBarClass.root}>
            <Menu/>
        </AppBar>
    )
}

const useNavBarStyles = makeStyles({
    root: {
        backgroundColor: '#19d3da',
        color: 'black'
    } 
});

function Menu(props) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    }
    const useStyles = makeStyles({
        root: {
            
        },
        menuIcon: {
            color: '#373a40',
            fontSize: '300%'
        }
    });
    const classes = useStyles();

    return (
        <div>
        <Button onClick={toggleDrawer} >
            {open ? <MenuOpenIcon className={classes.menuIcon}/> : <MenuIcon className={classes.menuIcon}/>}
        </Button>
        <Drawer open={open} onClose={toggleDrawer}>
            <List>
                <ListItem>
                    Ayy
                </ListItem>
            </List>
        </Drawer>
        </div>
    )
}