import { Post } from "../../types";

type Props = {
  posts: Post;
};

const BlogItem = ({ posts }: Props) => {
  return (
    <div>
      <h1>Blog</h1>
      <h2>{posts.title}</h2>
      <p>Corpo do post</p>
    </div>
  );
};

export default BlogItem;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return { paths, fallback: false }
};

export const getStaticProps = async () => {};
