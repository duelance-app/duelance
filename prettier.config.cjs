/**********************************************************************************************************
 * Copyright 2023 Duelance Inc. - All Rights Reserved
 *
 * This file is part of the Duelance project.
 *
 * Unauthorized copying, transferring or reproduction of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *********************************************************************************************************/

/** @type {import("prettier").Config} */
module.exports = {
    plugins: [
        require.resolve("prettier-plugin-tailwindcss"),
        require.resolve("@ianvs/prettier-plugin-sort-imports"),
    ],
    tabWidth: 4,
    semi: false,
    importOrder: [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@local/(.*)$",
        "^@/pages/(.*)$",
        "^@/config/(.*)$",
        "^@/lib/(.*)$",
        "^@/components/(.*)$",
        "^@/assets/(.*)$",
        "^@/styles/(.*)$",
        "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
}
