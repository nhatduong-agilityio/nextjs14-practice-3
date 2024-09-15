export type NavigationItem = {
  hasSubItem?: boolean
  isSubItem?: boolean
  icon?: JSX.Element
  subNavigationItem?: NavigationItem[]
  suffixContent?: JSX.Element
  label: string
  url: string
}
