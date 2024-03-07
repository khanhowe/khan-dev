import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import '../styles/Contact.css';
import { ReactNode } from 'react';

interface ContactLinkProps {
    children: ReactNode;
    url: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ children, url }) => {
    return (
        <a
            className="contact-icon"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

const Contact: React.FC = () => {
    const links: ContactLinkProps[] = [
        {
            children: <LinkedIn />,
            url: 'https://www.linkedin.com/in/khan-howe-5a1055163/',
        },
        {
            children: <GitHub />,
            url: 'https://github.com/khanhowe',
        },
        {
            children: <Email />,
            url: 'mailto:khanhowe@gmail.com',
        },
    ];
    return (
        <div className="contact">
            {links.map(({ children, url }, index) => (
                <ContactLink children={children} url={url} key={index} />
            ))}
        </div>
    );
};

export default Contact;
