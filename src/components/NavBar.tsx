import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/NavBar.css';
import React, { useMemo, useState } from 'react';

interface MenuProps {
    scrollToSection: (section: string) => void;
    sections: string[];
}

const NavBar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    
    const sections: string[] = useMemo(() => [
        'About',
        'Skills',
        'Experience',
        'Education',
        'Projects'
    ], []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 150;
          const bodyRect = document.body.getBoundingClientRect().top;
          const sectionRect = section.getBoundingClientRect().top;
          const sectionPosition = sectionRect - bodyRect;
          const offsetPosition = sectionPosition - offset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const MobileMenu: React.FC<MenuProps> = ({ scrollToSection, sections }) => (
        <div>
             <IconButton
                sx={{ display: { xs: 'flex', md: 'none'}, mr: 2 }}
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
                    <MenuItem key={section} onClick={() => { scrollToSection(section); handleCloseNavMenu(); }}>
                        <Typography textAlign="center">{section}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );

    const NameLogo: React.FC = () => (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: { xs: 'flex-end', md: 'inherit' },
            }}
        >
            <div className='logo'>
                <CodeIcon 
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    color="inherit"
                    fontSize='large'
                />
                <Typography variant='h5'>Khan Howe</Typography>
            </div>
        </Box>
    );

    const DesktopMenu: React.FC<MenuProps> = ({ scrollToSection, sections }) => (
        <Box sx={{ 
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
            alignItems: 'center',
        }}>
            {sections.map((section) => (
            <Button
                key={section}
                onClick={() => scrollToSection(section)}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                {section}
            </Button>
            ))}
        </Box>
    )


    return (
        <AppBar position='fixed'>
            <Container maxWidth='xl' className='navbar'>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <MobileMenu scrollToSection={scrollToSection} sections={sections}/>
                    <NameLogo/>
                    <DesktopMenu scrollToSection={scrollToSection} sections={sections}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;