// ReturoTax Design Customization File

const colors = {
  primary: '#5A67D8',
  secondary: '#4A5568',
  accent: '#E53E3E',
  background: '#FFFFFF',
  text: {
    light: '#F7FAFC',
    dark: '#2D3748'
  }
};

const branding = {
  logo: 'path/to/logo.svg',
  favicon: 'path/to/favicon.ico',
  font: 'Inter',
  typography: {
    headings: {
      fontWeight: 'bold',
      fontSize: { sm: '1.5rem', md: '2rem', lg: '2.5rem' }
    },
    body: {
      fontWeight: 'normal',
      fontSize: '1rem'
    }
  }
};

const tailwindConfig = {
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: [branding.font, 'sans-serif'],
      },
      typography: branding.typography
    }
  }
};

module.exports = { colors, branding, tailwindConfig };