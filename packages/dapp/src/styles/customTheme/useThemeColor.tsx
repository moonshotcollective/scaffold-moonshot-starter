import { mode } from '@chakra-ui/theme-tools';
import { colors } from './colors';

function useThemeColor() {
  const getTextColor = mode(colors.neutralDarkest, colors.neutralLightest);
  const getInverseTextColor = mode(
    colors.neutralLightest,
    colors.neutralDarkest
  );
  const getBgColor = mode(colors.neutralLightest, colors.neutralDarkest);
  const getOverBgColor = mode(colors.neutralLighter, colors.neutralDarker);
  const getHover2Color = mode(colors.neutralLight, colors.neutralDark);
  const getBorderColor = mode(colors.borderLight, colors.borderDark);
  const getPrimaryColor = mode(colors.primary[500], colors.primary[200]);

  return {
    getTextColor,
    getInverseTextColor,
    getBgColor,
    getOverBgColor,
    getHover2Color,
    getBorderColor,
    getPrimaryColor,
  };
}

export default useThemeColor;
