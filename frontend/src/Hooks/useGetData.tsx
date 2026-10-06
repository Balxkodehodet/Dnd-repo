import { useQuery } from "@tanstack/react-query";

export default function useGetData(url: string) {
  return useQuery({
    queryKey: ["dnd", url],
    queryFn: () => fetch(url, { credentials: url.includes("https://dnd-repo.onrender.com/") ? 'include' : 'omit'}).then((res) => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}