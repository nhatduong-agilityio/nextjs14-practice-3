export type OptionItem = {
  name: string
  action: () => void
}

export type SelectType = {
  value: string
  label: string
}

export type ProjectFilter = 'arrange' | 'filter' | 'sort'
