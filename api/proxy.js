import { createProxyMiddleware } from 'http-proxy-middleware';

export default function handler(req, res) {
    const target = 'https://iranfree-61z.pages.dev';
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const proxy = createProxyMiddleware({
        target: target,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/': '/'
        },
        onProxyReq: (proxyReq, req, res) => {
            // حفظ هدر اصلی host برای سرور مقصد
            proxyReq.setHeader('Host', 'iranfree-61z.pages.dev');
        }
    });
    
    return proxy(req, res);
}
