import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      fontSize: ['16px', '110%', '120%', '140%'],
      color: mode('fog', 'white')(props),
      bg: mode('white', 'cosmos')(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
  }),
};

export default styles;
