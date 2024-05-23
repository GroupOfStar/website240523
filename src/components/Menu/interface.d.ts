export interface IMenuProps {
  modelValue: string
}

export interface IMenuItemProps {
  path: string
}

/** Menu的Injection对象 */
export interface IMenuInjection {
  value: string
  onMenuChange: (val: string) => void
}
