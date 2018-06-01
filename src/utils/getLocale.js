// inspired from: https://github.com/vueComponent/ant-design/blob/master/components/_util/getLocale.js
export function getComponentLocale (props, context, componentName, getDefaultLocale) {
  let locale = {}
  if (context && context.unmLocale && context.unmLocale[componentName]) {
    locale = context.unmLocale[componentName]
  } else {
    const defaultLocale = getDefaultLocale()
    locale = defaultLocale.default || defaultLocale
  }
  let result = {
    ...locale
  }
  if (props.locale) {
    result = {
      ...result,
      ...props.locale
    }
  }
  if (props.locale && props.locale.lang) {
    result.lang = {
      ...locale.lang,
      ...props.locale.lang
    }
  }
  return result
}

export function getLocaleCode (context) {
  const localeCode = context.unmLocale && context.unmLocale.locale
  // Had use LocaleProvide but didn't set locale
  if (context.unmLocale && context.unmLocale.exist && !localeCode) {
    return 'zh-cn'
  }
  return localeCode
}
