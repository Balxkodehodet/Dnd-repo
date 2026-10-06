import { useQuery } from "@tanstack/react-query";

export default function useGetData(url: string) {
  return useQuery({
    queryKey: ["dnd", url],
    queryFn: () => fetch(url, { credentials: 'include' }).then((res) => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}