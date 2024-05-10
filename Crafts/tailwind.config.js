/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Crafts/screens/HomeScreen.{js,jsx,ts,tsx}","./**/*.{js,jsx,ts,tsx}", "/Crafts/screens/HomeScreen.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {},
  },
  "plugins": [
    [
      "module-resolver","nativewind/babel",
      {
        "root": ["./Crafts"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "alias": {
          "@components": "./Crafts/components",
          "@screens": "./Crafts/screens",
          // Add more aliases as needed
        }
      }
    ]
  ]
}

