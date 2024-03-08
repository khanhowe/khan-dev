import '../styles/App.css';
import ResponsiveTypography from './ResponsiveText';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <ResponsiveTypography variant="h2">
            <b>{title}</b> <hr />
        </ResponsiveTypography>
    );
};

export default SectionTitle;
