const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      // This is the specific line the Cloudflare validator was looking for
      proxyExternalRequest: "fetch", 
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
};

export default config;