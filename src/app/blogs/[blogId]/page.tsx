
import { getDetail } from "@/libs/client";
import { Container, Paper, Typography } from "@mui/material";

export default async function StaticDetailPage({
  params : { blogId },
}: {
  params: { blogId : string};
}) {
  const blog = await getDetail(blogId);

  return(
    <Container maxWidth='md'>
      <Typography variant='h4' padding={10} textAlign={'center'}>
        {blog.title}
      </Typography>
      <Paper elevation={2} sx={{padding: 3, paddingLeft: 10, paddingRight: 10}}>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </Paper>
    </Container>
  )
}
