import { useQuery } from "@tanstack/react-query";

export default function useGetData(url: string) {

  const backendUrl = import.meta.env.VITE_API_URL;
  return useQuery({
    queryKey: ["dnd", url],
    queryFn: () => fetch(url, { credentials: url.includes(backendUrl) ? 'include' : 'omit'}).then((res) => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}