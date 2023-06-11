'use client';

import {FC} from "react";

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: FC<MenuItemProps> = ({label, onClick}) => {
    return (
        <div
        onClick={onClick}
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibol">
            {label}
        </div>
    );
};

export default MenuItem;
