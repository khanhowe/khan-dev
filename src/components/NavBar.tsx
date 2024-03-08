import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';

import React, { useMemo, useRef, useState } from 'react';
import ResponsiveTypography from './ResponsiveText';
import { ContactButton, contactItems } from './Contact';
import { Person, WorkHistory } from '@mui/icons-material';

interface SectionProps {
    name: string;
    icon: JSX.Element;
}
interface MenuProps {
    scrollToSection: (section: string) => void;
    sections: SectionProps[];
}

const NavBar: React.FC = () => {
    const anchorRef = useRef(null);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const sections: SectionProps[] = useMemo(
        () => [
            { name: 'About', icon: <Person /> },
            { name: 'Background', icon: <WorkHistory /> },
            { name: 'Projects', icon: <CodeIcon /> },
        ],
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
            <Drawer
                anchor="right"
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                transitionDuration={500}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleCloseNavMenu}
                    onKeyDown={handleCloseNavMenu}
                >
                    {sections.map((section) => (
                        <ListItem
                            key={section.name}
                            onClick={() => scrollToSection(section.name)}
                        >
                            <ListItemIcon>{section.icon}</ListItemIcon>
                            <ListItemText primary={section.name} />
                        </ListItem>
                    ))}
                    <Divider />
                    {contactItems.map((item, index) => (
                        <ListItem button key={index}>
                            <a
                                href={item.link}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </a>
                        </ListItem>
                    ))}
                </Box>
            </Drawer>
        </div>
    );

    const NameLogo: React.FC = () => (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <CodeIcon sx={{ mr: 1 }} color="inherit" fontSize="large" />
                <ResponsiveTypography variant="h4">
                    Khan Howe
                </ResponsiveTypography>
            </Box>
        </Box>
    );

    const VerticalRule: React.FC = () => (
        <div
            style={{
                borderLeft: '1px solid white',
                height: '20px',
                marginLeft: '10px',
                marginRight: '10px',
            }}
        />
    );

    const DesktopMenu: React.FC<MenuProps> = ({
        scrollToSection,
        sections,
    }) => (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
        >
            {sections.map((section) => (
                <Button
                    key={section.name}
                    onClick={() => scrollToSection(section.name)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {section.name}
                </Button>
            ))}
            <VerticalRule />
            {contactItems.map((item, index) => (
                <ContactButton key={index} icon={item.icon} link={item.link} />
            ))}
        </Box>
    );

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px',
                    justifyContent: 'space-between', // Add this line
                }}
            >
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <NameLogo />
                </Toolbar>
                <div ref={anchorRef} />
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
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
