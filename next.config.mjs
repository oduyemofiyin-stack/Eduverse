/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
               "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googleapis.com https://*.gstatic.com https://accounts.google.com https://*.supabase.co https://www.googletagmanager.com https://*.googletagmanager.com https://www.google.com/recaptcha/ https://www.recaptcha.net/",
                "connect-src 'self' https://*.googleapis.com https://*.supabase.co wss://*.supabase.co https://api.emailjs.com https://*.googletagmanager.com https://www.google-analytics.com https://www.google.com/recaptcha/ https://www.recaptcha.net/",
               "frame-src 'self' https://*.supabase.co https://accounts.google.com https://www.youtube.com https://*.youtube.com https://www.google.com/recaptcha/ https://www.recaptcha.net/",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;