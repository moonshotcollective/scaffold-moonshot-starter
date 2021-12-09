import createCache from "@emotion/cache";

function createEmotionCache() {
  return createCache({ key: "chakra-emotion-css" });
}
export default createEmotionCache;
