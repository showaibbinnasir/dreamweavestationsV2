export default async function getAllBlogPosts() {
    const url = await fetch('https://portfolio-backend-one-rosy.vercel.app/blogs',

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }