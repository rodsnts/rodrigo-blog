import { useRouter } from "next/router";

export default function Post({ post }: any) {
  console.log(post);
  return (
    <div>
      <h1>{post}</h1>
    </div>
  );
}

export async function postProps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { pid } = router.query;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${pid}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );

  console.log(response, "response");

  return {
    props: {
      post: response,
    },
  };
}
