import { useColorModeValue } from '@chakra-ui/react';
import { colors } from '../../src';
function useColor() {
  const textVioletColor = useColorModeValue(
    colors.neutralDark,
    colors.neutralLight
  );
  const titleColor = useColorModeValue('fresh', 'moon');
  const accentColorScheme = useColorModeValue('green', 'yellow');

  return { textVioletColor, titleColor, accentColorScheme };
}

export default useColor;
