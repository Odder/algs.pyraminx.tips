import * as React from 'react';
import { useContext } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { GlobalContext } from '../contexts/globalContext';
import List from '@mui/material/List';

export default function Filters() {
  const { filters, setFilters } = useContext(GlobalContext);

  const handleToggle = (value: string) => () => {
    const currentIndex = filters.indexOf(value);
    const newChecked = [...filters];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setFilters(newChecked);
  };

  return (
    <List>
      {/* <ListSubheader>Filters</ListSubheader>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText id="switch-list-label-variants" primary="Show variants" />
          <Switch
            edge="end"
            onChange={handleToggle('variants')}
            checked={filters.indexOf('variants') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-variants',
            }}
          />
        </ListItemButton>
      </ListItem> */}
      <ListSubheader>Alg display</ListSubheader>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText id="switch-list-label-variants" primary="Show move count" />
          <Switch
            edge="end"
            onChange={handleToggle('movecount')}
            checked={filters.indexOf('movecount') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-movecount',
            }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText id="switch-list-label-variants" primary="Use S/H" />
          <Switch
            edge="end"
            onChange={handleToggle('hedge-sledge')}
            checked={filters.indexOf('hedge-sledge') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-hedge-sledge',
            }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText id="switch-list-label-variants" primary="Use triggers" />
          <Switch
            edge="end"
            onChange={handleToggle('triggers')}
            checked={filters.indexOf('triggers') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-triggers',
            }}
          />
        </ListItemButton>
      </ListItem>
    </List>

  );
}