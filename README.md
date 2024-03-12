This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn

- Next.js는 무엇인가?
  - SSG와 RSC의 차이
- app Router: 파일 기반 라우팅
- fetch 자동 캐시 기능
- revalidateTag의 기능: 캐시 비우기
- loading, error 페이지의 기능
- 서버 컴포넌트와 클라이언트 컴포넌트
- 메타데이터 다루기
  - 정적 / 동적 메타데이터(generateMetadata)
    layout 혹은 page 파일 & 서버 컴포넌트에서만 동작
