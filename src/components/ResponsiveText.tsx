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
        xs: '1.6rem',
        sm: '1.6rem',
        md: '1.8rem',
        lg: '2rem',
        xl: '2.2rem',
    },
    body2: {
        xs: '1.4rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        xl: '2rem',
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