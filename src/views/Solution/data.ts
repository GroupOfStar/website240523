import {
  Solution01,
  Solution02,
  Solution03,
  Solution04,
} from '@/assets/solution'

interface ISolutionItem {
  id: string
  title: string
  img: string
}

/** 解决方案 */
export const solutionList: ISolutionItem[] = [
  { id: '1', title: '智能制造', img: Solution01 },
  { id: '2', title: '轨道交通', img: Solution02 },
  { id: '3', title: '电力系统', img: Solution03 },
  { id: '4', title: '冶金化工', img: Solution04 },
]
