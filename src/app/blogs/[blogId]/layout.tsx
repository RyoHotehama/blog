import { getDetail } from '@/libs/client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

export async function generateMetadata({
  params : { blogId },
}: {
  params: { blogId : string};
}) {
  const blog = await getDetail(blogId);
  return { title: blog.title };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
