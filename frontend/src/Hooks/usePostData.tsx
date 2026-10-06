import { type CreateUserData } from "../types/types";
import { useMutation } from "@tanstack/react-query";

export default function usePostData(url: string) {
    
    const createUserMutation = useMutation({
        mutationFn: async (userData: CreateUserData) => {
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
    return createUserMutation;   
}