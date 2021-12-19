import { Styles } from '@chakra-ui/theme-tools';
import useThemeColor from '../hooks/useThemeColor';

const { getTextColor, getBgColor } = useThemeColor();

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      fontSize: ['16px', '110%', '120%', '140%'],
      color: getTextColor(props),
      bg: getBgColor(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
  }),
};

export default styles;
