import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText, ListItemButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};


function NavItem({ item }) {
  const { title, path, icon, info, subItems } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        button
        component={RouterLink}
        to={path}
        sx={{
          '&.active': {
            color: 'text.primary',
            bgcolor: 'action.selected',
            fontWeight: 'fontWeightBold',
          },
        }}
        onClick={subItems ? handleClick : null}
      >
        {icon && <StyledNavItemIcon>{icon}</StyledNavItemIcon>}
        <ListItemText disableTypography primary={title} />
        {info && info}
        {subItems && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {subItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems.map((subItem) => (
              <ListItemButton
                key={subItem.title}
                component={RouterLink}
                to={subItem.path}
              >
                {subItem.icon && <StyledNavItemIcon>{subItem.icon}</StyledNavItemIcon>}
                <ListItemText primary={subItem.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}