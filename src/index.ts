import stringHash from 'string-hash'

export interface InjectOptions {
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
}

export function inject(content: string, options?: InjectOptions) {
  const map = {
    jsInline: {
      tag: 'script',
      attrs: {
        type: 'text/javascript',
      },
    },
    jsLink: {
      tag: 'script',
      attrs: {
        type: 'text/javascript',
        src: content,
      },
    },
    cssInline: {
      tag: 'style',
      attrs: {},
    },
    cssLink: {
      tag: 'link',
      attrs: {
        type: 'text/css',
        rel: 'stylesheet',
        href: content,
      },
    },
  }

  const doc = options?.document || document
  const type = options?.type || 'js'
  const id = `${type}-${options?.id || String(stringHash(content))}`
  let tag = doc.getElementById(id)
  if (tag && options?.shouldReplace) {
    tag.parentElement!.removeChild(tag)
    tag = null
  }
  return new Promise<HTMLElement>((resolve, reject) => {
    const isLink = /(^https?:)|(^\.{0,2}\/)/.test(content)
    const key = `${type}${isLink ? 'Link' : 'Inline'}` as keyof typeof map
    const info = map[key]

    if (!tag) {
      tag = doc.createElement(info.tag)

      const attrs: InjectOptions['attrs'] = { ...options?.attrs, ...info.attrs }
      Object.keys(attrs).forEach(attr => {
        tag!.setAttribute(attr, String(attrs[attr]))
      })
      tag.id = id

      if (!isLink) {
        tag.innerHTML = content
      } else {
        tag.onload = () => resolve(tag!)
        tag.onerror = ev => {
          const err = new Error(`The ${info.tag} element load failed.`)
          Object.assign(err, { event: ev })
          reject(err)
        }
      }

      const injectIn = options?.injectIn || 'head'
      const parent = injectIn === 'body' ? doc.body : doc.head
      parent.appendChild(tag)

      if (!isLink) {
        resolve(tag!)
      }
    } else {
      reject(new Error(`The ${info.tag} element already exists.`))
    }
  })
}
