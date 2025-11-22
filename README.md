
## 多语言企业网站概述

这个项目基于[Next.js](https://nextjs.org)，采用[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).使用`shadcn ui`库，并使用`wrangler`进行部署于`cloudflare workers`。

> 主要项目依赖`node@v22.19.0`,`tailwindcss@4`,`wrangler@4.35.0`,`next@15.4.6`,`next-intl@4.3.7`
> 本地需要安装全局opennextjs-cloudflare

## 项目进度
- [x] 公共模块
  - [x] 顶部
  - [x] 底部
  - [ ] 侧边栏
  - [x] 多语言
- [x] 首页
- [x] 产品
  - [x] 顶部
- [x] 项目
- [x] 新闻
- [x] 关于
- [x] 联系


## 开始

```bash
npm install 
npm install -g wrangler
```

## 开发

```bash
npm run dev
```

## 构建、预览、发布

> 由于在windows平台默认预览会失败，所以改成下面的命令来看在cloudflare上的效果

构建
```bash
npm run wbuild
```

预览
```bash
npm run wrangler
```

发布
```bash
npm run wdeploy
```

## shadcn 插件安装
```bash
npx shadcn@latest add button
```

## 注意

> 后期在调整以避免国内无法访问的情况

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
