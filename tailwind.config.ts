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
      screens: {
        xs: '480px', // iPhone 6, 7, 8, X, 11, 12 / Galaxy S8 / HTC One, Blackberry Passport / Amazon Kindle Fire HD 7 …
        sm: '600px', // LG G Pad 8.3 / Amazon Kindle Fire …
        md: '768px', // Microsoft Surface / iPad Pro 9.7 / iPad Mini …
        lg: '1024px', // iPad Pro 12.9 / Microsoft Surface Pro 3 …
        xl: '1280px', // Google Chromebook Pixel / Samsung Chromebook …
        '2xl': '1400px', // Macbook Air 2020 M1 / MacBook Pro 15
      },
      spacing: {
        30: '1.875rem',
        50: '3.125rem',
        60: '3.75rem',
        90: '5.625rem',
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
          90: 'hsl(var(--blue-90))',
        },
        pink: {
          90: 'hsl(var(--pink-90))',
        },
        white: 'hsl(var(--white))',
        body: 'hsl(var(--body))',
        brand: 'hsl(var(--brand))',
        input: {
          DEFAULT: 'hsl(var(--input))',
          foreground: 'hsl(var(--input-foreground))',
        },
        'search-input': {
          DEFAULT: 'hsl(var(--search-input))',
          foreground: 'hsl(var(--search-input-foreground))',
        },
        label: {
          DEFAULT: 'hsl(var(--label))',
          secondary: 'hsl(var(--label-secondary))',
          field: 'hsl(var(--label-field))',
        },
        link: 'hsl(var(--link))',
        text: {
          DEFAULT: 'hsl(var(--text))',
          foreground: 'hsl(var(--text-foreground))',
          link: 'hsl(var(--text-link))',
          'link-selected': 'hsl(var(--text-link-selected))',
          secondary: 'hsl(var(--text-secondary))',
          label: 'hsl(var(--text-label))',
        },
        icon: {
          DEFAULT: 'hsl(var(--icon))',
          primary: 'hsl(var(--icon))',
        },
        heading: {
          DEFAULT: 'hsl(var(--heading))',
          primary: 'hsl(var(--heading))',
          secondary: 'hsl(var(--heading-secondary))',
        },
        separator: {
          DEFAULT: 'hsl(var(--separator))',
          primary: 'hsl(var(--separator))',
          secondary: 'hsl(var(--separator-secondary))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          primary: 'hsl(var(--border))',
          secondary: 'hsl(var(--border-secondary))',
        },
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsl(var(--background))',
          secondary: 'hsl(var(--background-secondary))',
        },
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
          secondary: 'hsl(var(--popover-secondary))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
          secondary: 'hsl(var(--card-secondary))',
        },
        tag: {
          label: 'hsl(var(--tag-label))',
        },
        progress: {
          DEFAULT: 'hsl(var(--progress))',
          foreground: 'hsl(var(--progress-foreground))',
        },
        select: {
          DEFAULT: 'hsl(var(--select))',
          foreground: 'hsl(var(--select-foreground))',
        },
        toggle: {
          DEFAULT: 'hsl(var(--toggle))',
          foreground: 'hsl(var(--toggle-foreground))',
        },
        dropdown: {
          DEFAULT: 'hsl(var(--dropdown))',
        },
        checkbox: {
          DEFAULT: 'hsl(var(--checkbox))',
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
