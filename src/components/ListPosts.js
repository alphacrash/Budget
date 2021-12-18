import { Grid, Typography } from '@mui/material';

import Post from './Post';

function ListPosts({ posts }) {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        List
      </Typography>
      <Grid container spacing={5} alignItems="flex-end">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
}

export default ListPosts;
