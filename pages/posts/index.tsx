import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p style={{ fontSize: "20px", color: "white" }}>Post: {pid}</p>;
};

export default Post;
