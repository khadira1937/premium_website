module.exports = {
  apps: [{
    name: 'buy-iptv-uk',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/home/buy-iptv-uk/htdocs/www.buy-iptv-uk.com',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};