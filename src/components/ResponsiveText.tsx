import { Typography, TypographyProps, SxProps, Theme } from '@mui/material';

interface CustomTypographyProps extends TypographyProps {
    sx?: SxProps<Theme>;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'subtitle1';
}

const fontSizeMap = {
    h1: {
        xs: '2.5rem',
        sm: '2.8rem',
        md: '3.1rem',
        lg: '3.4rem',
        xl: '3.7rem',
    },
    h2: {
        xs: '2rem',
        sm: '2.3rem',
        md: '2.6rem',
        lg: '2.9rem',
        xl: '3.2rem',
    },
    h3: {
        xs: '1.9rem',
        sm: '2.1rem',
        md: '2.4rem',
        lg: '2.7rem',
        xl: '3.0rem',
    },
    h4: {
        xs: '1.6rem',
        sm: '1.9rem',
        md: '2.2rem',
        lg: '2.5rem',
        xl: '2.8rem',
    },
    body1: {
        xs: '1.2rem',
        sm: '1.2rem',
        md: '1.3rem',
        lg: '1.5rem',
        xl: '1.7rem',
    },
    body2: {
        xs: '1rem',
        sm: '1rem',
        md: '1.1rem',
        lg: '1.3rem',
        xl: '1.5rem',
    },
    subtitle1: {
        xs: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1.2rem',
    },
};

const ResponsiveTypography: React.FC<CustomTypographyProps> = ({
    sx,
    variant,
    ...props
}) => (
    <Typography
        {...props}
        variant={variant}
        sx={{
            fontSize: {
                ...(fontSizeMap[variant] || {}),
            },
            ...sx,
        }}
    />
);

export default ResponsiveTypography;
