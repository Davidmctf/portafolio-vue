import { definePreset } from '@primeuix/themes'
import Lara from '@primeuix/themes/lara'

const THEME_PRESET = definePreset(Lara, {
  // primitive: {
  //   soho: {
  //     50: '#f4f4f6',
  //     100: '#e8e8ed',
  //     200: '#d1d1db',
  //     300: '#b4b4c7',
  //     400: '#9090ae',
  //     500: '#6c6c94',
  //     600: '#565679',
  //     700: '#43435e',
  //     800: '#3f4046',
  //     900: '#2c2c34',
  //     950: '#16161d',
  //   },
  // },
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
    //   colorScheme: {
    //     light: {
    //       surface: {
    //         0: '#ffffff',
    //         50: '{soho.50}',
    //         100: '{soho.100}',
    //         200: '{soho.200}',
    //         300: '{soho.300}',
    //         400: '{soho.400}',
    //         500: '{soho.500}',
    //         600: '{soho.600}',
    //         700: '{soho.700}',
    //         800: '{soho.800}',
    //         900: '{soho.900}',
    //         950: '{soho.950}',
    //       },
    //     },
    //     dark: {
    //       surface: {
    //         0: '#ffffff',
    //         50: '{soho.50}',
    //         100: '{soho.100}',
    //         200: '{soho.200}',
    //         300: '{soho.300}',
    //         400: '{soho.400}',
    //         500: '{soho.500}',
    //         600: '{soho.600}',
    //         700: '{soho.700}',
    //         800: '{soho.800}',
    //         900: '{soho.900}',
    //         950: '{soho.950}',
    //       },
    //     },
    //   },
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
