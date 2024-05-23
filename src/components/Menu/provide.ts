import { InjectionKey } from 'vue'
import { IMenuInjection } from './interface'

export const MENU_PROVIDE: InjectionKey<IMenuInjection> = Symbol('MENU_PROVIDE')
