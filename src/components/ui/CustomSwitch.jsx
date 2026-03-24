import React from 'react';
import Switch from '@mui/material/Switch';

const CustomSwitch = () => {
  return (
    <Switch
      defaultChecked
      sx={{
        '& .MuiSwitch-track': {
          backgroundColor: 'var(--grey-c1) !important',
        },
        '& .Mui-checked + .MuiSwitch-track': {
          backgroundColor: 'var(--green-success) !important',
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: 'var(--grey-c1) !important',
        },
        '& .Mui-checked .MuiSwitch-thumb': {
          backgroundColor: 'var(--green-success) !important',
        },
      }}
    />
  );
};

export default CustomSwitch;
