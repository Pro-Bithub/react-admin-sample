// in src/MyMenu.js
import * as React from 'react';
import { createElement } from 'react';
import { useMediaQuery , Theme} from '@mui/material';
import { Menu, useResourceDefinitions } from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';

 const MyMenu = () => {
    const isXSmall = useMediaQuery((theme: Theme)  => theme.breakpoints.down('xs'));
    const resources = useResourceDefinitions();
    
    return (
        <Menu>
            {Object.keys(resources).map(name => (
                <Menu.Item
                    key={name}
                    to={`/${name}`}
                    primaryText={resources[name].options && resources[name].options.label || name}
                    leftIcon={createElement(resources[name].icon)}
                />
            ))}
            
            <Menu.Item to="/meetings" primaryText="Miscellaneous" leftIcon={<LabelIcon />} />
            <Menu.Item to="/settings" primaryText="Miscellaneous" />
        </Menu>
    );
};
// Export the MyMenu component as the default export
export default MyMenu;