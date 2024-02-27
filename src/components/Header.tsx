import { Breadcrumbs, Link } from "@mui/material";
import '../styles/Header.css'
import { useEffect, useMemo, useRef, useState } from "react";

interface BreadcrumbLinkProps {
    sectionName: string;
    isActive: boolean;
    onClick: () => void;
}

const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({ sectionName, isActive, onClick }) => (
    <Link 
        underline={isActive ? "always" : "hover"}
        color={isActive ? "secondary" : "text.primary"}
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
        style={{ cursor: 'pointer' }}
    >
        {sectionName}
    </Link>
);

const Header: React.FC = () => {
    const [activeSelection, setActiveSection] = useState<string>('');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    
    const sections: string[] = useMemo(() => [
        'About',
        'Technologies and Languages',
        'Professional Experience',
        'Education',
        'Projects'
    ], []);

    const scrollToSection = (sectionId: string): void => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        sections.forEach((section) => {
            const sectionEl = document.getElementById(section);
            if (sectionEl) {
                observer.observe(sectionEl);
                sectionRefs.current[section] = sectionEl;
            }
        });

        return () => {
            sections.forEach((section) => {
                const sectionEl = sectionRefs.current[section];
                if (sectionEl) {
                    observer.unobserve(sectionEl);
                }
            });
        };
    }, [sections]);

    return (
        <div className='header sticky' style={{ display: activeSelection === 'About' ? 'none' : 'flex'}}>
            <Breadcrumbs>
                {sections.map((section,index) => <BreadcrumbLink 
                    key={index} 
                    sectionName={section}
                    isActive={activeSelection === section}
                    onClick={() => scrollToSection(section)}
                />)}
            </Breadcrumbs>
        </div>
    );
}

export default Header;