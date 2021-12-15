# dapper-ui

# Get Started

```text
yarn
```

```text
cd examples && npm i
```

## Development

Watch styles changes

```text
yarn start
```

Inside example

```text
npm run dev
```

## Workflow suggestions

Create the desired styles with storybook: `yarn storybook` and `yarn start`.

Then stop them and run Inside example `npm run dev` to start the application.

## Notes

Right now use chakra-ui components. Use this custom library only for customTheme.

## Publish

- Change the package name to one that is available on npm.

Setup semantic release

```text
npx semantic-release-cli setup
```

Update package-lock with the latest dependencies

```text
npm i
```

Commit

```text
npm run acp
```

## Usage

```tsx
import { extendTheme } from "@chakra-ui/react";
import { customTheme } from "@scaffold-eth/ui";

const theme = extendTheme(customTheme);

...

<ChakraProvider theme={theme}>
    <Component {...pageProps} />
</CacheProvider>
```

## Extend the theme

```tsx
const myTheme = {
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
};
const theme = extendTheme(customTheme, myTheme);
```
