export const canUseDom = !!(
  typeof window !== 'undefined' && window.document && window.document.createElement
)

export const IS_IOS = canUseDom && /iphone|ipad|ipod/i.test(window.navigator.userAgent)
