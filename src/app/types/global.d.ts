declare module '*.css' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare const _IS_DEV_: boolean

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
