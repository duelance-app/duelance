/****************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 * 
 * This file is part of the Duelance project.
 * 
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 ****************************************************************************/

/** @type {import("prettier").Config} */
module.exports = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    tabWidth: 4,
    semi: false,
}
