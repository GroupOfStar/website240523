import type { InjectionKey } from 'vue'
import type { ISubPageInjection } from './interface'

export const SUB_PAGE_PROVIDE: InjectionKey<ISubPageInjection> =
  Symbol('SUB_PAGE_PROVIDE')
