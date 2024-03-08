import { Typography, TypographyProps, SxProps, Theme } from "@mui/material";

interface CustomTypographyProps extends TypographyProps {
    sx?: SxProps<Theme>;
    variant: 'h1' | 'h2' | 'body1' | 'body2';
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
};

const ResponsiveTypography: React.FC<CustomTypographyProps> = ({ sx, variant, ...props }) => (
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