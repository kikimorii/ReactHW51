import { useEffect } from "react";

export const useGetTodos = (setTodos, setIsLoading) => {
    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((loadedData) => {
                setTodos(loadedData);
            })
            .finally(() => setIsLoading(false));
    }, []);
}