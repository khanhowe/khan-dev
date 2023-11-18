import { useMediaQuery } from '@mui/material';

export const useIsXsScreen = () => {
  return useMediaQuery('(max-width:600px)');
};

export const useIsSmScreen = () => {
  return useMediaQuery('(max-width:960px)');
};

export const useIsMdScreen = () => {
  return useMediaQuery('(max-width:1280px)');
};

export const useIsLgScreen = () => {
  return useMediaQuery('(max-width:1920px)');
};
