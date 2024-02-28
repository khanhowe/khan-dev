import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/NavBar.css';
import { useMemo, useState } from 'react';

const NavBar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    
    const sections: string[] = useMemo(() => [
        'About',
        'Skills',
        'Experience',
        'Education',
        'Projects'
    ], []);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position='fixed'>
            <Container maxWidth='xl' className='navbar'>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        sx={{ display: { sm: 'flex', md: 'none'}, mr: 2 }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {sections.map((section) => (
                            <MenuItem key={section} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{section}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Box>
                        <div className='logo'>
                            <CodeIcon 
                                sx={{ display: { sm: 'none', md: 'flex' }, mr: 1 }}
                                color="inherit"
                                fontSize='large'
                            />
                            <Typography variant='h5'>Khan Howe</Typography>
                        </div>
                    </Box>
                    <Box sx={{ 
                        flexGrow: 1,
                        display: { xs: 'none', sm: 'none', md: 'flex' },
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        {sections.map((section) => (
                        <Button
                            key={section}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {section}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;