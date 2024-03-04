/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "PoppinsThin": ["Poppins Thin"],
      "PoppinsReg": ["Poppins Reg"],
      "PoppinsMed": ["Poppins Med"],
      "PoppinsSemi": ["Poppins Semi"],
      "PoppinsBold": ["Poppins Bold"],
      "PoppinsExtra": ["Poppins Extra"],
      "PoppinsBlack": ["Poppins Black"]
    }
  },
  plugins: [],
}