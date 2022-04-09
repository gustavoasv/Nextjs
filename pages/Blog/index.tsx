import { Post } from "../../types/index";

type Props = {
  name: string;
  posts: Post[];
};

const Blog = ({ name, posts }: Props) => {
  return (
    <>
      <h1>Blog do {name}</h1>
      <ul>
        {posts.map((post, key) => (
          <ul key={key}>
            <li>{post.title}</li>
          </ul>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      name: "Gustavo",
      posts,
    },
    revalidate: 7200 // A cada 2 horas vai ser feito requisiçoes para pegar iformações novas
  };
};

export default Blog;
