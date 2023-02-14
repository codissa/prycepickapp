import React, { useState } from 'react';
import './style.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HeartIcon = () => {
    const [isClick, setClick] = useState(false);

    const handleClick = () => {
        setClick(!isClick);
    };

    return (
 
            <FavoriteIcon className={isClick?'red':'black'} onClick={handleClick}></FavoriteIcon>

    );
};

export default HeartIcon;