export default async function getAllVUBlogPosts() {
    const url = await fetch('https://portfolio-backend-one-rosy.vercel.app/allblogs',

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }