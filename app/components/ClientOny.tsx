'use client';
import {FC, ReactNode, useEffect, useState} from "react";

interface ClientOnlyProps {
    children: ReactNode
}

const ClientOny: FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])
    return (
        <>
            {children}
        </>
    );
};

export default ClientOny;
