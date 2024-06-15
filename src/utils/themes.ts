import {
  Theme,
  createLightTheme,
  createDarkTheme,
  BrandVariants,
} from '@fluentui/react-components'

const myNewTheme: BrandVariants = {
  10: '#050205',
  20: '#221024',
  30: '#3B1640',
  40: '#501957',
  50: '#631F6C',
  60: '#6F3076',
  70: '#7A4080',
  80: '#86508B',
  90: '#916095',
  100: '#9D70A0',
  110: '#A880AB',
  120: '#B490B6',
  130: '#BFA0C1',
  140: '#CBB1CC',
  150: '#D6C2D7',
  160: '#E2D3E2',
}

const lightTheme: Theme = {
  ...createLightTheme(myNewTheme),
}

const darkTheme: Theme = {
  ...createDarkTheme(myNewTheme),
}

darkTheme.colorBrandForeground1 = myNewTheme[110]
darkTheme.colorBrandForeground2 = myNewTheme[120]

export {lightTheme, darkTheme};