const nextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".+\\.workers\\.dev" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
