import { mode } from '@chakra-ui/theme-tools';
import { colors } from '../theme/colors';

function useThemeColor() {
  const getTextColor = mode(colors.neutralDarkest, colors.neutralLightest);
  const getBgColor = mode(colors.neutralLightest, colors.neutralDarkest);
  const getOverBgColor = mode(colors.neutralLighter, colors.neutralDarker);
  const getHover2Color = mode(colors.neutralLight, colors.neutralDark);
  // const txtColor = mode(colors.neutralDarker, colors.neutralLighter);

  // const titleColor = useColorModeValue('fresh', 'moon');
  // const accentColorScheme = useColorModeValue('green', 'yellow');

  return { getTextColor, getBgColor, getOverBgColor, getHover2Color };
}

export default useThemeColor;
