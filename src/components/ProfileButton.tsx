import { useUserMenu } from 'react-admin';
import React, { forwardRef, Ref } from 'react';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import { useNavigate } from 'react-router-dom';
const ProfileButton = React.forwardRef<HTMLLIElement>((props, ref) => {
  const { onClose } = useUserMenu();
  const navigate = useNavigate();
  const handleClick = () => {
    // Do something when the button is clicked
    // For example, navigate to "/profile"
    console.log("Button clicked!");
    onClose();
    navigate('/profile');
  };

    return (
      <MenuItem
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        Mon profile
      </MenuItem>
    );
  });
  
export default ProfileButton;
