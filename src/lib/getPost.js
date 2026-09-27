export default async function getPost() {
    const res = await fetch("http://localhost:5000/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts!");
    }

  return res.json();
}

export async function getTechnology() {
  const res = await fetch('http://localhost:5001/techs', {
    catch: 'no-error',
  });
  
  if(!res.ok) {
    throw new Error('Failed to fetch Technologies!')
  }

  return res.json();
}