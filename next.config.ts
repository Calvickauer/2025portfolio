import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HUGGINGFACE_API: process.env.NEXT_PUBLIC_HUGGINGFACE_API,
    NEXT_PUBLIC_HUGGINGFACE_MODEL: process.env.NEXT_PUBLIC_HUGGINGFACE_MODEL,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    FROM_EMAIL: process.env.FROM_EMAIL,
    TO_EMAIL: process.env.TO_EMAIL,
  },
};

export default nextConfig;
