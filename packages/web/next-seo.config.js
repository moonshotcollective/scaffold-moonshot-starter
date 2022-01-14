export const appStaticContent = {
  dappLink: "https://demo.scaffold-eth.io",
  currentAppLink: "https://example.scaffold-eth.io",
  name: "Scaffold ETH Demo",
  description: "Bootstrap & customize your dApp in minutes",
};

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: appStaticContent.name,
  titleTemplate: `%s | ${appStaticContent.name}`,
  defaultTitle: appStaticContent.name,
  description: appStaticContent.description,
  canonical: appStaticContent.currentAppLink,
  openGraph: {
    url: appStaticContent.currentAppLink,
    title: appStaticContent.name,
    description: appStaticContent.description,
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/90008925?s=200&v=4",
      },
    ],
    site_name: appStaticContent.name,
  },
  twitter: {
    handle: "@buidlguidl",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
