/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

import { cn } from "@/lib/utils"

const Button = ({
    type,
    text,
    size,
    icon,
    iconPosition,
    round,
    circular,
}: {
    type: "Primary" | "Secondary" | "White"
    text: string
    size: 1 | 2 | 3 | 4 | 5
    icon?: boolean
    iconPosition?: "left" | "right"
    round?: boolean
    circular?: boolean
}) => {
    return (
        <>
            <button
                type="button"
                className={cn(
                    "inline-flex items-center rounded border border-transparent bg-indigo-600 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                    size === 1
                        ? "px-2.5 py-1.5 text-xs"
                        : size === 2
                        ? "px-3 py-2 text-sm"
                        : size === 3
                        ? "px-4 py-2 text-sm"
                        : size === 4
                        ? "px-4 py-2 text-base"
                        : size === 5
                        ? "px-6 py-3 text-base"
                        : "px-2.5 py-1.5 text-sm"
                )}
            >
                {text}
            </button>
        </>
    )
}

export default Button
