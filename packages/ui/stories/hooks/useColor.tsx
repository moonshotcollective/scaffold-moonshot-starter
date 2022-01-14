import { useColorModeValue } from '@chakra-ui/react';
import { colors } from '../../src';

function useColor() {
  const textVioletColor = useColorModeValue(
    colors.neutralDark,
    colors.neutralLight
  );
  const titleColor = useColorModeValue(
    colors.accentLight[500],
    colors.accentDark[500]
  );
  const accentColorScheme = useColorModeValue('accentLight', 'accentDark');

  return { textVioletColor, titleColor, accentColorScheme };
}

export default useColor;
