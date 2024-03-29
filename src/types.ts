import { ReactNode } from 'react'
import { TextProps, ViewProps } from 'react-native'
export interface BaseProps {
  marginTop?: number
  marginBottom?: number
  zIndex?: number
  color?: string
  verticalMargin?: number
  horizontalMargin?: number
  children?: ReactNode
}

export interface TextKitProps extends BaseProps, TextProps {
  centered?: boolean
  capitalize?: boolean
  alignLeft?: boolean
  alignRight?: boolean
  uppercase?: boolean
  lowercase?: boolean
  fontWeight?: number
  fontSize?: number
}

export interface ViewKitProps extends BaseProps, ViewProps {
  width?: number
  height?: number
  padding?: number
  margin?: number
  marginLeft?: number
  marginRight?: number
  relative?: boolean
  absolute?: boolean
  overflowHidden?: boolean
}

export interface FlexRowProps extends ViewKitProps {
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  centered?: boolean
}

export interface CircleViewProps extends ViewKitProps {
  size: number
}

export interface WhitespaceProps extends ViewKitProps {
  space: number
}

export interface SpacingProps extends ViewKitProps {
  multiplier?: number
  base?: number
  horizontal?: boolean
}
