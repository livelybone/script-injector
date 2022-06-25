interface InjectOptions {
  /**
   * Default: 'js'
   * */
  type?: 'js' | 'css'
  /**
   * Id of script dom element
   *
   * Default is the return value of `stringHash(content)`
   * */
  id?: string
  /**
   * Attributes of script dom element
   * */
  attrs?: Record<string | number, any>
  /**
   * The document which the script will inject into
   * */
  document?: Document
  /**
   * Replace the previous dom element with same id
   * */
  shouldReplace?: boolean
  /**
   * Default: 'head'
   * */
  injectIn?: 'body' | 'head'
  /**
   * Content is a link
   */
  isLink?: boolean
}
declare function inject(
  content: string,
  options?: InjectOptions,
): Promise<HTMLElement>

export { InjectOptions, inject }
