import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';
import cascadestyles from './../../menu/context/components/MainStyles.module.css';

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    borderRadius: 0,
    height: 60,
    width: 384,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 500,
  },
}));

const Header: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container  + " " + cascadestyles.mainGradient + " " + cascadestyles.whiteLetters}>
      <Text className={classes.heading}>{title}</Text>
    </Box>
  );
};

export default React.memo(Header);
