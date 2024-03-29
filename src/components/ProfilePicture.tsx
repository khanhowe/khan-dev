import { Box } from '@mui/material';

const imageSizeMap = {
    width: {
        xs: '300px',
        sm: '300px',
        md: '300px',
        lg: '350px',
        xl: '400px',
    },
    height: {
        xs: '300px',
        sm: '300px',
        md: '300px',
        lg: '350px',
        xl: '400px',
    },
    margin: {
        xs: '0 auto 1rem',
        sm: '0 auto 1.5rem',
        md: '0 auto 2rem',
        lg: '0 auto 2.5rem',
        xl: '0 auto 3rem',
    },
};

const ProfilePicture: React.FC = () => (
    <Box
        sx={{
            ...imageSizeMap,
            borderRadius: '50%',
            boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
        }}
    >
        <img
            src="https://avatars.githubusercontent.com/u/12534401?v=4"
            alt="khan-howe"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
            }}
        />
    </Box>
);

export default ProfilePicture;
