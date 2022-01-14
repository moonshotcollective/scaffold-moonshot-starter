import {
  ChakraProvider,
  Button as ChakraButton,
  Heading,
  Box,
} from '@chakra-ui/react';
import { Button, QButton, Switch, customTheme } from '../../.';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box p="16">
        <Heading>Custom Design Library</Heading>
        <Button variant="outline">Hello OK</Button>
        <QButton variant="outline">Hello OK</QButton>
        <ChakraButton variant="outline">Hello OK</ChakraButton>
        <Switch />
      </Box>
    </ChakraProvider>
  );
}

export default App;
