import { useEffect, useState } from "react";

export const useRefreshDisable = () => {
    const [refreshDisabled, setRefreshDisabled] = useState(true);

    useEffect(() => {
        setRefreshDisabled(false);
    }, []);

    return refreshDisabled;
};