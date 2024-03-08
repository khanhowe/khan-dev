import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Button, MenuItem } from '@mui/material';
import ResponsiveTypography from './ResponsiveText';

interface ContactItem {
    icon: JSX.Element;
    link: string;
    title: string;
}

interface ContactButtonProps {
    icon: JSX.Element;
    link: string;
}

const contactItems: ContactItem[] = [
    {
        icon: <GitHub />,
        link: 'https://github.com/khanhowe',
        title: 'GitHub',
    },
    {
        icon: <LinkedIn />,
        link: 'https://www.linkedin.com/in/khan-howe-5a1055163/',
        title: 'LinkedIn',
    },
    {
        icon: <Email />,
        link: 'mailto:khanhowe@gmail.com',
        title: 'Email',
    },
];

const ContactButton: React.FC<ContactButtonProps> = ({ icon, link }) => (
    <Button href={link} sx={{ color: 'white' }}>
        {icon}
    </Button>
);

const ContactMenuItem: React.FC<ContactButtonProps> = ({ icon, link }) => (
    <MenuItem>
        <ResponsiveTypography variant="body1">
            <a href={link} style={{ color: 'black', margin: 'none auto' }}>
                {icon}
            </a>
        </ResponsiveTypography>
    </MenuItem>
);

export { ContactButton, ContactMenuItem, contactItems };
