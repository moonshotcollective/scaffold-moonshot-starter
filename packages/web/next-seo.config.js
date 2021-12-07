export const appStaticContent = {
  dappLink: "https://app.coordination.party",
  currentAppLink: "https://coordination.party",
  name: "Greenpill project",
  description: "Greenpill the world and slay Moloch everyday!",
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
        url: "https://schellingpoint.gitcoin.co/image/star2.gif",
      },
    ],
    site_name: appStaticContent.name,
  },
  twitter: {
    handle: "@GitcoinDAO",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
