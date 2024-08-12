import { notFound } from 'next/navigation';

export async function fetchData<T>(url: string): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${apiUrl}/${url}`, {
    cache: 'no-cache',
  });
  const data = await res.json();

  if (!res.ok) {
    console.error(data.message);
  }

  return data;
}

export async function fetchById<T>(url: string, id: string): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${apiUrl}/${url}/${id}`, {
    next: {
      revalidate: 3600,
    },
  });
  const data = await res.json();
  if (!data?.data) {
    return notFound();
  }
  if (data?.data) {
    return data?.data as T;
  } else {
    return data as T;
  }

  return data?.data;
}
