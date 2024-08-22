import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './icons/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      spacing: {
        50: '3.125rem',
      },
      colors: {
        orange: {
          20: 'hsl(var(--orange-20))',
          90: 'hsl(var(--orange-90))',
        },
        red: {
          20: 'hsl(var(--red-20))',
        },
        green: {
          20: 'hsl(var(--green-20))',
          90: 'hsl(var(--green-90))',
        },
        purple: {
          90: 'hsl(var(--purple-90))',
        },
        blue: {
          20: 'hsl(var(--blue-20))',
          80: 'hsl(var(--blue-80))',
        },
        pink: {
          90: 'hsl(var(--pink-90))',
        },
        body: 'hsl(var(--body))',
        brand: 'hsl(var(--brand))',
        input: {
          DEFAULT: 'hsl(var(--input))',
          foreground: 'hsl(var(--input-foreground))',
        },
        label: 'hsl(var(--label))',
        text: {
          DEFAULT: 'hsl(var(--text))',
          foreground: 'hsl(var(--text))',
        },
        icon: {
          DEFAULT: 'hsl(var(--icon))',
          primary: 'hsl(var(--icon))',
        },
        heading: {
          DEFAULT: 'hsl(var(--heading))',
          primary: 'hsl(var(--heading))',
        },

        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 20px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 10px)',
        sm: 'calc(var(--radius) - 20px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-left': 'fade-in-left 0.2s ease-out',
        'fade-in-right': 'fade-in-right 0.2s ease-out',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        tn: '11px',
        xs: '12px',
        sm: '13px',
        base: '14px',
        md: '16px',
        lg: '24px',
        xl: '28px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
