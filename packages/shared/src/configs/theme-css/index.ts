/** CSS theme strings for JavaScript consumers */

import type { MarketplaceThemeKey } from '../../types/marketplace'
import baseCSS from './base.css?raw'
import blueCSS from './blue.css?raw'
import blueCyanCSS from './blueCyan.css?raw'
import blueMountainCSS from './blueMountain.css?raw'
import cuteGreenCSS from './cuteGreen.css?raw'
import cyanCSS from './cyan.css?raw'
import defaultCSS from './default.css?raw'
import extremeBlackCSS from './extremeBlack.css?raw'
import fullStackBlueCSS from './fullStackBlue.css?raw'
import geekBlackCSS from './geekBlack.css?raw'
import graceCSS from './grace.css?raw'
import greenCSS from './green.css?raw'
import inkCSS from './ink.css?raw'
import nightPurpleCSS from './nightPurple.css?raw'
import orangeHeartCSS from './orangeHeart.css?raw'
import purpleCSS from './purple.css?raw'
import redCSS from './red.css?raw'
import roseCSS from './rose.css?raw'
import scienceBlueCSS from './scienceBlue.css?raw'
import shanchuiCSS from './shanchui.css?raw'
import simpleCSS from './simple.css?raw'
import wechatFormatCSS from './wechatFormat.css?raw'

export const baseCSSContent = baseCSS

export const themeMap = {
  default: defaultCSS,
  grace: graceCSS,
  simple: simpleCSS,
  blue: blueCSS,
  blueCyan: blueCyanCSS,
  blueMountain: blueMountainCSS,
  cuteGreen: cuteGreenCSS,
  cyan: cyanCSS,
  extremeBlack: extremeBlackCSS,
  fullStackBlue: fullStackBlueCSS,
  geekBlack: geekBlackCSS,
  green: greenCSS,
  ink: inkCSS,
  nightPurple: nightPurpleCSS,
  orangeHeart: orangeHeartCSS,
  purple: purpleCSS,
  red: redCSS,
  rose: roseCSS,
  scienceBlue: scienceBlueCSS,
  shanchui: shanchuiCSS,
  wechatFormat: wechatFormatCSS,
} as const

/**
 * Accent color for fixed-color themes (migrated from markdown-nice).
 * These themes have their own identity colors; --md-primary-color should
 * match the theme's accent rather than the user's color picker choice.
 */
export const themeAccentColor: Partial<Record<keyof typeof themeMap, string>> = {
  blue: `hsl(216, 100%, 68%)`,
  blueCyan: `#009688`,
  blueMountain: `#3c70c6`,
  cuteGreen: `#48b378`,
  cyan: `#47c1a8`,
  extremeBlack: `#000`,
  fullStackBlue: `#40B8FA`,
  geekBlack: `#212122`,
  green: `#35b378`,
  ink: `#5c5c5c`,
  nightPurple: `#916dd5`,
  orangeHeart: `#ef7060`,
  purple: `#773098`,
  red: `#f83929`,
  rose: `#DEC6FB`,
  scienceBlue: `#0e88eb`,
  shanchui: `#ffb11b`,
  wechatFormat: `#ff3502`,
}

export type BuiltinThemeName = keyof typeof themeMap

/** Built-in theme id, or marketplace theme key (`mp:<id>`). */
export type ThemeName = BuiltinThemeName | MarketplaceThemeKey

export function isBuiltinThemeName(name: string): name is BuiltinThemeName {
  return Object.keys(themeMap).includes(name)
}
