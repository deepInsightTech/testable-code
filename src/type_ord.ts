import * as t from 'io-ts';
import {isRight} from "fp-ts/lib/Either";
import {PathReporter} from "io-ts/lib/PathReporter";
import {make} from 'io-ts/lib/Schema'

const Address =t.type({
    id:t.number,
    name: t.string,
    address_line_1:t.string,
    address_line_2:t.string,
    landmark:t.string,
    city:t.string,
    state:t.string,
    pin:t.string,
    mobile:t.string
  },'address')

const Sender =t.type({
    name:t.string,
    phone:t.string
},'sender')

//const postSchema = make(s => s.type
const Products = t.type({
    sub_order_id:t.number,
    sub_order_num:t.string,
    name:t.string,
    image:t.string,
    price:t.number,
    quantity:t.number,
    variation:t.string,
    product_sku:t.string,
    product_id:t.string,
    order_status:t.number,
    supplier_order_status:t.number,
    reseller_expected_dispatch_date:t.string,
    reseller_expected_dispatch_date_iso:t.string,
    sla_status:t.string,
    expected_dispatch_date:t.string,
    expected_dispatch_date_iso:t.string,
    shipment_label:t.string,
    awb_num:t.string,
    shipment_label_changed:t.boolean
},'products')

export const Data = t.type({
    id: t.number,
    sub_total:t.number,
    shipping_charges: t.number,
    total:t.number,
    customer_cod_amount:t.number,
    order_num:t.string,
    payment_mode:t.string,
    created:t.string,
    created_iso:t.string,
    address:Address,
    sender:Sender,
    gold:t.boolean,
    cod_charges:t.number,
    products:t.array(Products)
}, 'order');

export type order = t.TypeOf<typeof Data>
const main = () => {
    data(
    {
        id: 191211796,
        sub_total: 299,
        shipping_charges: 0,
        total: 299,
        customer_cod_amount: 299,
        order_num: '169342194',
        payment_mode: 'cod',
        created: '2021-05-07 08:58:01',
        created_iso: '2021-05-07T08:58:01+0530',
        address: {
          id: 46952145,
          name: 'Chandrashree Priyadarshinee Jena',
          address_line_1: 'plot no-540, Prachi Vihar,palasuni, Bhubaneswar, Odisha',
          address_line_2: 'plot no-540, Prachi Vihar,palasuni, Bhubaneswar, Odisha',
          landmark: 'plot no-540, Prachi Vihar,palasuni, Bhubaneswar, Odisha',
          city: 'Bhubaneswar',
          state: 'Odisha',
          pin: '751010',
          mobile: '9114625987'
        },
        sender: { name: 'Chandrashree priyadarshinee Jena', phone: '+919114625987' },
        gold: false,
        cod_charges: 0,
        products: [
          {
            sub_order_id: 197792252,
            sub_order_num: '169342194_1',
            name: 'Women Solid Cotton Kurti',
            image: 'https://images.meesho.com/images/products/834111/9_512.jpg',
            price: 299,
            quantity: 1,
            variation: 'M',
            product_sku: 'FCK-2',
            product_id: '1B1E3I',
            order_status: 0,
            supplier_order_status: 4,
            reseller_expected_dispatch_date: '2021-05-08',
            reseller_expected_dispatch_date_iso: '2021-05-08T00:00:00+0530',
            sla_status: 'breaching_soon',
            expected_dispatch_date: '2021-05-08',
            expected_dispatch_date_iso: '2021-05-08T00:00:00+0530',
            shipment_label: 'https://s3-ap-southeast-1.amazonaws.com/meesho-supply-v2/labels/xpressbees/39183bb909937476d3ad6ce712e237416ee3f455_134092120303053.pdf',
            awb_num: '134092120303053',
            shipment_label_changed: false
          }
        ]
      }),
    data({
        id: 191224864,
        sub_total: 472,
        shipping_charges: 0,
        total: 472,
        customer_cod_amount: 472,
        order_num: '587454744',
        payment_mode: 'cod',
        created: '2021-05-07 09:29:18',
        created_iso: '2021-05-07T09:29:18+0530',
        address: {
          id: 32952402,
          name: 'Laxmipriyapanda',
          address_line_1: 'H/G A-42, Indu Mansion',
          address_line_2: 'Cda Sector - 7',
          landmark: 'Cda',
          city: 'Cuttack',
          state: 'Odisha',
          pin: '753014',
          mobile: '8338878658'
        },
        sender: { name: 'Lp Panda', phone: '+918338878658' },
        gold: false,
        cod_charges: 0,
        products: [
          {
            sub_order_id: 197805538,
            sub_order_num: '587454744_1',
            name: "Women's Embroidered Cotton Kurti",
            image: 'https://images.meesho.com/images/products/6834142/bf50f_512.jpg',
            price: 472,
            quantity: 1,
            variation: 'M',
            product_sku: 'K4440445-XL',
            product_id: '2E1E3I6',
            order_status: 0,
            supplier_order_status: 4,
            reseller_expected_dispatch_date: '2021-05-08',
            reseller_expected_dispatch_date_iso: '2021-05-08T00:00:00+0530',
            sla_status: 'breaching_soon',
            expected_dispatch_date: '2021-05-08',
            expected_dispatch_date_iso: '2021-05-08T00:00:00+0530',
            shipment_label: 'https://s3-ap-southeast-1.amazonaws.com/meesho-supply-v2/labels/xpressbees/2f1b1bde904f172b0fbb5cd991be9684d7a1fcce_134092120267785.pdf',
            awb_num: '134092120267785',
            shipment_label_changed: false
          }
        ]
      })
}

const data = (data: any) => {
    const dataEither = Data.decode(data);
    if (isRight(dataEither)) {
        const person = dataEither.right;
        console.log( person, Data.encode(person));
    } else {
        const report = PathReporter.report(dataEither);
        console.error(`ERROR : ${report}`);
    }
}

main();