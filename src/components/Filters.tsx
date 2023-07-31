import * as React from 'react';
import { useContext } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { GlobalContext } from '../contexts/GlobalContent';
import List from '@mui/material/List';

export default function Filters() {
  const { filters, setFilters } = useContext(GlobalContext);

  const supportedFilters = [
    {
      title: 'Alg display',
      filters: [
        {
          title: 'Show move count',
          value: 'movecount'
        },
        {
          title: 'Ignore AUF',
          value: 'ignore-auf'
        },
      ],
    },
    {
      title: 'Alg Manipulation',
      filters: [
        {
          title: 'Use S/H',
          value: 'hedge-sledge'
        },
        {
          title: 'Use triggers',
          value: 'triggers'
        },
        {
          title: 'Use PyNotation',
          value: 'pynotation'
        },
      ]
    }
  ];

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
      {supportedFilters.map((filterGroup, index) => (
        <React.Fragment key={index}>
          <ListSubheader>{filterGroup.title}</ListSubheader>
          {filterGroup.filters.map((filter, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemText id="switch-list-label-variants" primary={filter.title} />
                <Switch
                  edge="end"
                  onChange={handleToggle(filter.value)}
                  checked={filters.indexOf(filter.value) !== -1}
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-variants',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </React.Fragment>
      ))}
    </List>

  );
}