import { useMutation } from "@tanstack/react-query";

export default function usePostData<TVariables>(url: string) {
    const backendUrl = import.meta.env.VITE_API_URL;
    const userMutation = useMutation({
        mutationFn: async (userData: TVariables) => {
            const response = await fetch(url, {
                method: 'POST',
                credentials: url.includes(backendUrl) ? 'include' : 'omit', // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'An error occurred while processing the request.');
        }
        return result;

        }
    })
    return userMutation;   
}