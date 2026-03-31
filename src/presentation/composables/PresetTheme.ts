import { definePreset } from '@primeuix/themes'
import Lara from '@primeuix/themes/lara'

const THEME_PRESET = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{cyan.50}',
      100: '{cyan.100}',
      200: '{cyan.200}',
      300: '{cyan.300}',
      400: '{cyan.400}',
      500: '{cyan.500}',
      600: '{cyan.600}',
      700: '{cyan.700}',
      800: '{cyan.800}',
      900: '{cyan.900}',
      950: '{cyan.950}',
    },
  },
})

const THEME_OPTIONS = {
  darkModeSelector: '.theme-dark',
}

const RIPPLE_BUTTONS = {
  ripple: true,
}

export const THEME_CONFIG = {
  theme: {
    preset: THEME_PRESET,
    options: THEME_OPTIONS,
  },
  ...RIPPLE_BUTTONS,
}
