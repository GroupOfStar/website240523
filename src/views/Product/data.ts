import {
  Product1_01,
  Product2_01,
  Product2_02,
  Product2_03,
} from '@/assets/product'

interface IProductItem {
  id: string
  title: string
  description: string
  img: string
}

/** Ethercat分支器 */
export const branchingList: IProductItem[] = [
  {
    id: '1',
    title: 'Ethercat分支器',
    description:
      'EtherCAT六网口交换机，基于高性能EtherCAT ASIC通讯芯片，速度更快，支持交换机级联功能，支持DC时钟和环网冗余，支持网线热插拔，组态配置简单，支持各大主流EtherCAT主站，供电系统支持防反接与短路保护，能够灵活组合成多种拓扑结构，可广泛应用于各种EtherCAT网络工业系统。',
    img: Product1_01,
  },
]

/** Ethercat协议转换器 */
export const converterList: IProductItem[] = [
  {
    id: '1',
    title: 'Ethercat从站转Modbus RTU',
    description:
      '符合标准EtherCAT协议和Modbus RTU协议规范，支持串口自定义协议配置简单。',
    img: Product2_01,
  },
  {
    id: '2',
    title: 'Ethercat从站转Modbus TCP',
    description:
      '符合标准EtherCAT协议和Modbus TCP协议规范，支持网络自定义协议配置简单。',
    img: Product2_02,
  },
  {
    id: '3',
    title: 'Ethercat从站转CAN/CANOPEN',
    description: '符合标准EtherCAT协议和CANopen协议规范，配置简单。',
    img: Product2_03,
  },
]
