module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    darkMode: 'selector',
    safelist: [
        'text-blue-600',
        'text-yellow-500',
        'text-blue-500',
        'text-red-600',
        'text-[#4C7B9C]',
        'text-[#3776AB]',
    ],
}