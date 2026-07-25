import type { IConfigOption } from '../types'
import type { ThemeName } from './theme-css'

export {
  baseCSSContent,
  type BuiltinThemeName,
  isBuiltinThemeName,
  themeAccentColor,
  themeMap,
  type ThemeName,
} from './theme-css'

export const themeOptionsMap = {
  default: {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  grace: {
    label: `优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  simple: {
    label: `简洁`,
    value: `simple`,
    desc: `@okooo5km`,
  },
  blue: {
    label: `蓝调`,
    value: `blue`,
    desc: ``,
  },
  blueCyan: {
    label: `青蓝`,
    value: `blueCyan`,
    desc: ``,
  },
  blueMountain: {
    label: `蓝山`,
    value: `blueMountain`,
    desc: ``,
  },
  cuteGreen: {
    label: `可爱绿`,
    value: `cuteGreen`,
    desc: ``,
  },
  cyan: {
    label: `墨青`,
    value: `cyan`,
    desc: ``,
  },
  extremeBlack: {
    label: `极黑`,
    value: `extremeBlack`,
    desc: ``,
  },
  fullStackBlue: {
    label: `全栈蓝`,
    value: `fullStackBlue`,
    desc: ``,
  },
  geekBlack: {
    label: `极客黑`,
    value: `geekBlack`,
    desc: ``,
  },
  green: {
    label: `青绿`,
    value: `green`,
    desc: ``,
  },
  ink: {
    label: `水墨`,
    value: `ink`,
    desc: ``,
  },
  nightPurple: {
    label: `夜紫`,
    value: `nightPurple`,
    desc: ``,
  },
  orangeHeart: {
    label: `橙心`,
    value: `orangeHeart`,
    desc: ``,
  },
  purple: {
    label: `姹紫`,
    value: `purple`,
    desc: ``,
  },
  red: {
    label: `丹红`,
    value: `red`,
    desc: ``,
  },
  rose: {
    label: `蔷薇`,
    value: `rose`,
    desc: ``,
  },
  scienceBlue: {
    label: `科学蓝`,
    value: `scienceBlue`,
    desc: ``,
  },
  shanchui: {
    label: `山吹`,
    value: `shanchui`,
    desc: ``,
  },
  wechatFormat: {
    label: `微信风`,
    value: `wechatFormat`,
    desc: ``,
  },
}

export const themeOptions: IConfigOption<ThemeName>[] = [
  {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  {
    label: `优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  {
    label: `简洁`,
    value: `simple`,
    desc: `@okooo5km`,
  },
  {
    label: `蓝调`,
    value: `blue`,
    desc: ``,
  },
  {
    label: `青蓝`,
    value: `blueCyan`,
    desc: ``,
  },
  {
    label: `蓝山`,
    value: `blueMountain`,
    desc: ``,
  },
  {
    label: `可爱绿`,
    value: `cuteGreen`,
    desc: ``,
  },
  {
    label: `墨青`,
    value: `cyan`,
    desc: ``,
  },
  {
    label: `极黑`,
    value: `extremeBlack`,
    desc: ``,
  },
  {
    label: `全栈蓝`,
    value: `fullStackBlue`,
    desc: ``,
  },
  {
    label: `极客黑`,
    value: `geekBlack`,
    desc: ``,
  },
  {
    label: `青绿`,
    value: `green`,
    desc: ``,
  },
  {
    label: `水墨`,
    value: `ink`,
    desc: ``,
  },
  {
    label: `夜紫`,
    value: `nightPurple`,
    desc: ``,
  },
  {
    label: `橙心`,
    value: `orangeHeart`,
    desc: ``,
  },
  {
    label: `姹紫`,
    value: `purple`,
    desc: ``,
  },
  {
    label: `丹红`,
    value: `red`,
    desc: ``,
  },
  {
    label: `蔷薇`,
    value: `rose`,
    desc: ``,
  },
  {
    label: `科学蓝`,
    value: `scienceBlue`,
    desc: ``,
  },
  {
    label: `山吹`,
    value: `shanchui`,
    desc: ``,
  },
  {
    label: `微信风`,
    value: `wechatFormat`,
    desc: ``,
  },
]
