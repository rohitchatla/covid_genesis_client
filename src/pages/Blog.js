import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';
//
import POSTS from '../_mocks_/blog';
import React, { useState, useEffect } from 'react';

import axios from '../services/Axios';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Blog() {
  const [newsPosts, setnewsPosts] = useState([]);

  useEffect(async () => {
    console.log('Called');
    var API_KEY = '7187f744279e49a18a7482e906a71174';
    var searchTerm = 'covid19';
    // await axios
    //   .get(
    //     `https://newsapi.org/v2/everything?q=${searchTerm}&from=2021-12-24&sortBy=popularity&apiKey=${API_KEY}`
    //   ) // axios returns a promise
    //   .then(async (response) => {
    //     //{data}
    //     console.log(response.data);
    //     await setnewsPosts(response.data.articles);
    //     // alert(JSON.stringify(response.data));
    //   })
    //   .catch(({ response }) => {
    //     console.log(response);
    //   });

    fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&language=en&pageSize=100&apiKey=${API_KEY}`
    )
      .then((results) => results.json())
      .then((data) => {
        // const { name } = data.results[0];
        console.log(data);
        setnewsPosts(data.articles);
      });
  }, []);

  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {newsPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} index={index} /> //key={post.id}
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
