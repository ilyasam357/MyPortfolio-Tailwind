/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '512px',
          'md': '720px',
          'lg': '1024px',
          'xl': '1140px',
          '2xl': '1320px',
        },
      },
      backgroundImage:{
        'hero-img': "url('https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvZGluZyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D')",
      }
    },
  },
  plugins: [],
}

