import { Typography } from "@mui/material";
import React from "react";

interface NameTitleProps {
    name: string;
};

const NameTitle: React.FC<NameTitleProps> = ({name}) => {
    console.log('test');
    return (
        <div className='name-title'>
            <Typography
                variant='h1'
                fontFamily='Segoe UI'
            >
                {name}
            </Typography>
        </div>
    );
};

export default NameTitle;


