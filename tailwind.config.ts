import type { Config } from 'tailwindcss'
const config: Config={content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{colors:{gold:'#C8A96B',ink:'#0B0B0C',charcoal:'#151516',paper:'#F6F4EF'},fontFamily:{sans:['var(--font-inter)','Arial','sans-serif'],display:['var(--font-playfair)','Georgia','serif']},boxShadow:{luxury:'0 20px 60px rgba(0,0,0,.14)'}}},plugins:[]}
export default config
