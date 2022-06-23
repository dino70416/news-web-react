import React from 'react';
import { Box } from '@mui/material';
import NewsCard from '../NewsCard';

const CardContainer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '98%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Box>
  );
};

export default CardContainer;
