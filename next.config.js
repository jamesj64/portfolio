/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  headers: async () => {
    return [
      {
        source: "/demos/hack-slash/build/Web.framework.js.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
      {
        source: "/demos/hack-slash/build/Web.data.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          }
        ]
      },
      {
        source: "/demos/hack-slash/build/Web.wasm.br",
        headers: [
          {
            key: "Content-Encoding",
            value: "br",
          },
          {
            key: "Content-Type",
            value: "application/wasm"
          }
        ]
      },
    ];
  },
};

module.exports = nextConfig
