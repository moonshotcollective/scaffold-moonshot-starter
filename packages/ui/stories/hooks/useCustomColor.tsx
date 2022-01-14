import { useColorModeValue } from '@chakra-ui/react';

function useCustomColor() {
  const violetColor = useColorModeValue('violet.800', 'ice');
  const titleColor = useColorModeValue('fresh', 'moon');
  const accentColorScheme = useColorModeValue('green', 'yellow');

  return { violetColor, titleColor, accentColorScheme };
}

export default useCustomColor;
