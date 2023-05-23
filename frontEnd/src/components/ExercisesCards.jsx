import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgMediaCard from './SingleCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, display :'flex', flexWrap: 'wrap', justifyContent: 'center', gap:'20px' }}>
        {Array.from(Array(6)).map((_, index) => (
      <ImgMediaCard title={"Swimming"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nemo corporis nostrum!"} type={"Full Body"} duration={"10min"} date={"23/05/2023"} />
    ))}


    </Box>
  );
}