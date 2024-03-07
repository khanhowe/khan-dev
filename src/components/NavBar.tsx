import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/NavBar.css';
import React, { useMemo, useRef, useState } from 'react';
import ResponsiveTypography from './ResponsiveText';

interface MenuProps {
    scrollToSection: (section: string) => void;
    sections: string[];
}

const NavBar: React.FC = () => {
    const anchorRef = useRef(null);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const sections: string[] = useMemo(
        () => ['About', 'Background', 'Projects'],
        [],
    );

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

    const handleOpenNavMenu = () => {
        setAnchorElNav(anchorRef.current);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const MobileMenu: React.FC<MenuProps> = ({ scrollToSection, sections }) => (
        <div>
            <IconButton
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
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
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {sections.map((section) => (
                    <MenuItem
                        key={section}
                        onClick={() => {
                            scrollToSection(section);
                            handleCloseNavMenu();
                        }}
                    >
                        <ResponsiveTypography variant="body1">
                            {section}
                        </ResponsiveTypography>
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
            }}
        >
            <div className="logo">
                <CodeIcon sx={{ mr: 1 }} color="inherit" fontSize="large" />
                <ResponsiveTypography variant="h4">
                    Khan Howe
                </ResponsiveTypography>
            </div>
        </Box>
    );

    const DesktopMenu: React.FC<MenuProps> = ({
        scrollToSection,
        sections,
    }) => (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
        >
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
    );

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl" className="navbar">
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <NameLogo />
                    <div
                        ref={anchorRef}
                        style={{ position: 'fixed', top: 0, right: 0 }}
                    />
                    <MobileMenu
                        scrollToSection={scrollToSection}
                        sections={sections}
                    />
                    <DesktopMenu
                        scrollToSection={scrollToSection}
                        sections={sections}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
