export interface ISubPageProps {
  title: string
  img: string
  modelValue?: string
}

export interface ISubPageEmits {
  (e: 'update:modelValue', label?: string): void
}

export interface ISubPageItemProps {
  label: string
}

export type ISubPageInjection = ISubPageProps['modelValue']
