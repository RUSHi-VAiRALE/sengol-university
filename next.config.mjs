/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
