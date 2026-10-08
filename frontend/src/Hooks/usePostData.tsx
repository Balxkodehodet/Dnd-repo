import { useMutation } from "@tanstack/react-query";

export default function usePostData<TVariables>(url: string) {
    
    const userMutation = useMutation({
        mutationFn: async (userData: TVariables) => {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
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