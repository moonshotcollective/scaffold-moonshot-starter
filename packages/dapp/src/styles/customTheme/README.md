# Chakra UI Theme

This is a Chakra UI theme generated with [Hypertheme Editor](https://hyperthe.me).

## Usage

Comment line 3 and uncomment line 4 in `styles/customTheme/index.ts`
Use it in inside your ChakraProvider (already set up in this project)

```tsx
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return <ChakraProvider theme={theme}>...rest of code</ChakraProvider>;
}

export default App;
```
