import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const isMobile = (): boolean => {
  const theme = useTheme();
  
  return useMediaQuery(theme.breakpoints.down('sm'));
};