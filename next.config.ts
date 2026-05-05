import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// eslint-disable-next-line sonarjs/no-hardcoded-ip
	allowedDevOrigins: ['172.20.10.2'],
};

export default nextConfig;
