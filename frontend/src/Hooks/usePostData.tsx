import { useMutation } from "@tanstack/react-query";

export default function usePostData<TVariables>(url: string) {
    
    const userMutation = useMutation({
        mutationFn: async (userData: TVariables) => {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return response.json();

        }
    })
    return userMutation;   
}