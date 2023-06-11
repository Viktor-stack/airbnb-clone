'use client';
import React, {FC} from 'react';
import {Toaster} from "react-hot-toast";

interface ToasterProvidersProps {

}
const ToasterProvider:FC<ToasterProvidersProps> = () => {
    return (
        <Toaster/>
    );
};

export default ToasterProvider;
