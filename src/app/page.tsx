import { getBlogs } from "@/libs/client";
import { Container, List, ListItemButton, ListItemText, Typography } from "@/styles/commonStyle"

export default async function BlogList() {
  const { contents }  = await getBlogs();

  return (
    <Container maxWidth='md'>
      <Typography variant='h3' padding={10} textAlign={'center'}>
        blog一覧
      </Typography>
      {contents &&
        <List>
          {contents.map((blog) => (
            <ListItemButton key={blog.id} component={'a'} href={`/blogs/${blog.id}`}>
              <ListItemText primary={blog.title} primaryTypographyProps={{fontSize: 25}}/>
            </ListItemButton>
          ))}
        </List>
      }
    </Container>
  );
}
