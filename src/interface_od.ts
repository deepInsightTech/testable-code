// import * as E from 'fp-ts/lib/Either'
// import * as RTE from 'fp-ts/lib/ReaderTaskEither'
// import {make, TypeOf} from 'io-ts/lib/Schema'
// import { SendHandle } from 'node:child_process'
// import { checkEndpoint } from './lib'
// import {CheckEndpointDeps, Failure} from './lib'

// async () => {
//       const postSchema = make(s => s.type({
//         id: s.number
        
//       }))
    


interface Address{
    id:number
    name: string
    address_line_1: string
    address_line_2: string
    landmark?: string
    city: string
    state: string
    pin: string
    mobile: string

}

interface Sender{
    name:string 
    phone:string

}

interface  Products{
      sub_order_id: number
      sub_order_num: string
      name: string
      image?: string
      price: number
      quantity: number,
      variation: string,
      product_sku: string,
      product_id: string,
      order_status: number
      supplier_order_status: number
      reseller_expected_dispatch_date: string
      reseller_expected_dispatch_date_iso: string
      sla_status?: string
      shipment_label?:string
      expected_dispatch_date: string
      expected_dispatch_date_iso: string
      awb_num: string
      shipment_label_changed?: boolean
}

interface Data{
    id: number
    sub_total: number
    shipping_charges: number
    total: number
    customer_cod_amount: number
    order_num: string
    payment_mode:string
    created:string
    created_iso:string
    address: Address  
    sender:Sender
    gold?:boolean
    cod_charges: number
    products:Products[]
}

const orders: Data={
  id: 191244406,
  sub_total: 292,
  shipping_charges: 0,
  total: 292,
  customer_cod_amount: 292,
  order_num: '374225116',
  payment_mode: 'cod',
  created: '2021-05-07 10:08:27',
  created_iso: '2021-05-07T10:08:27+0530',
  address: {
    id: 48622311,
    name: 'Brunda',
    address_line_1: '62',
    address_line_2: 'bramhinstreet near lakshminarayana temple sundarapalya kgf tq kolar dist',
    landmark: 'sundarapalya',
    city: 'bethamangala',
    state: 'karnataka',
    pin: '563116',
    mobile: '7353554152'
  },
  sender: { name: 'brindha', phone: '+917353554152' },
  gold: false,
  cod_charges: 0,
  products: [
    {
      sub_order_id: 197825371,
      sub_order_num: '374225116_1',
      name: 'Women Cotton A-line Solid Orange Kurti',
      image: 'https://images.meesho.com/images/products/664629/9_512.jpg',
      price: 292,
      quantity: 1,
      variation: 'XL',
      product_sku: 'k257-1',
      product_id: '9C6E6G',
      order_status: 0,
      supplier_order_status: 4,
      reseller_expected_dispatch_date: '2021-05-08',
      reseller_expected_dispatch_date_iso: '2021-05-08T00:00:00+0530',
      sla_status: 'breaching_soon',
      expected_dispatch_date: '2021-05-08',
      expected_dispatch_date_iso: '2021-05-08T00:00:00+0530',
      shipment_label: 'https://s3-ap-southeast-1.amazonaws.com/meesho-supply-v2/labels/delhivery/9583c28989d67896807b7ffc3aec0abc2f784578_14908351353585.pdf',
      awb_num: '14908351353585',
      shipment_label_changed: false
    }
  ]
}


