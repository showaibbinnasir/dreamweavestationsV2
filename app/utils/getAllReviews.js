export default async function getAllReviews() {
    const url = await fetch('https://dream-weave-stations-server-showaibbinnasir.vercel.app/allreviews');
    const data = await url.json()
    return data;
  }