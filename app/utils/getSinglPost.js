export default async function getSinglePost(id) {
    const url = await fetch(`https://portfolio-backend-one-rosy.vercel.app/blogs/${id}`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }