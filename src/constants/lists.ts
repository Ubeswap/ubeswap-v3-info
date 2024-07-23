// used to mark unsupported tokens, these are hosted lists of unsupported tokens

export const UNSUPPORTED_LIST_URLS: string[] = []
export const UBE_LIST = 'https://unpkg.com/@ubeswap/default-token-list@latest/ubeswap.token-list.json'
export const UBE_EXTENDED_LIST =
  'https://unpkg.com/@ubeswap/default-token-list@latest/ubeswap-experimental.token-list.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  UBE_LIST,
  UBE_EXTENDED_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [UBE_LIST, UBE_EXTENDED_LIST]
