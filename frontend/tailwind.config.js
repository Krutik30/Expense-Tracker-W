/** @type {import('tailwindcss').Config} */
import { grey} from '@mui/material/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      yellow_et: '#FBE8A6',
      orange_et:"#FF7165",
      blue_et:"#303C6C",
      sky_et:"#B4DFE5",
      aqua_et:"#D2FDFF"

      
    }
  
  },
  plugins: [],
}

