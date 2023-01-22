/****************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 * 
 * This file is part of the Duelance project.
 * 
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 ****************************************************************************/

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
