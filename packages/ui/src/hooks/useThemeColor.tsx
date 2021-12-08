import { mode } from '@chakra-ui/theme-tools';
import { colors } from '../theme/colors';

function useThemeColor() {
  const getTextColor = mode(colors.neutralDarkest, colors.neutralLightest);
  const getBgColor = mode(colors.neutralLightest, colors.neutralDarkest);
  const getOverBgColor = mode(colors.neutralLighter, colors.neutralDarker);
  // const titleColor = useColorModeValue('fresh', 'moon');
  // const accentColorScheme = useColorModeValue('green', 'yellow');

  return { getTextColor, getBgColor, getOverBgColor };
}

export default useThemeColor;
