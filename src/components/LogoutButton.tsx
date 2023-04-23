import * as React from 'react';
import { forwardRef, ForwardedRef } from 'react';
import { useLogout } from 'react-admin';
import MenuItem from '@mui/material/MenuItem';

const LogoutButton = forwardRef((props: { href: string; } & React.ComponentPropsWithoutRef<'a'>, ref: ForwardedRef<HTMLAnchorElement>) => {
    const logout = useLogout();
    const handleClick = () => logout();
    return (
        <MenuItem
            component="a"
            onClick={handleClick}
            ref={ref}
            {...props}
        >
            Se Déconnecter
        </MenuItem>
    );
});

export default LogoutButton;
