import { Typography, TypographyProps, SxProps, Theme } from "@mui/material";

interface CustomTypographyProps extends TypographyProps {
    sx?: SxProps<Theme>;
    variant: 'h1' | 'h2' | 'body1';
}

const fontSizeMap = {
    h1: {
        xs: '2rem',
        sm: '2.5rem',
        md: '3rem',
        lg: '3.5rem',
        xl: '4rem',
    },
    h2: {
        xs: '1.5rem',
        sm: '2.0rem',
        md: '2.5rem',
        lg: '3.0rem',
        xl: '3.5rem',
    },
    body1: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.5rem',
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