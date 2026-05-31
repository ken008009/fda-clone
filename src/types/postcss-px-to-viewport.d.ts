declare module 'postcss-px-to-viewport' {
  interface Options {
    viewportWidth?: number
    unitPrecision?: number
    viewportUnit?: string
    selectorBlackList?: (string | RegExp)[]
    minPixelValue?: number
    mediaQuery?: boolean
    exclude?: RegExp | RegExp[]
    landscape?: boolean
    landscapeUnit?: string
    landscapeWidth?: number
  }

  function postcssPxToViewport(options?: Options): any
  export = postcssPxToViewport
}
