import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const replacePlugin = (mode)=>{
  return{
    name: "html-inject-env",
    transformIndexHtml: (html)=>{
      if(mode == "production"){
        return html.replace(
          "<!--REACT_ENV -->",
          '<script src="./config/front.env.js"></script>'
        );
      }
      return null;
    },
    };
  };
export default defineConfig(({mode})=>({
  plugins: [react(), replacePlugin(mode)],
}));