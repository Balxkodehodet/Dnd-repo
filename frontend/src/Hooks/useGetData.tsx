import { useQuery } from "@tanstack/react-query";

export default function useGetData<TData>(url: string | null) {
  const backendUrl = import.meta.env.VITE_API_URL;

  return useQuery<TData>({
    queryKey: ["dnd", url],
    queryFn: async (): Promise<TData> => {
      if(!url){
        throw new Error("URL is missing")
      }
      const res = await fetch(url, {
        credentials: url?.includes(backendUrl) ? "include" : "omit",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "An error occurred while processing the request."
        );
      }

      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!url
  });
}
