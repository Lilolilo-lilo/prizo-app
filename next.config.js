/** @type {import('next').NextConfig} */
const nextConfig = {
  // Удаляем output: 'standalone', если не планируется использование Docker
  images: {
    // Включаем оптимизацию изображений
    unoptimized: false,
    // Добавляем домены, если планируется загрузка изображений с внешних источников
    domains: []
  }
};

module.exports = nextConfig;