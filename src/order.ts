const axiosApi = require('axios')
const rx = require('rxjs')
const operators =require ('rxjs/operators')

import { filter, map, take } from 'rxjs/operators'


function FetchApi(url :any ){
    return rx.from(axiosApi.request({
        url,
        method: 'POST',
        headers: {
            'authority': 'supplier.meeshosupply.com',
            'method': 'POST',
            'path': '/api/v2/order/fetch/all',
            'scheme': 'https',
            'accept': 'application/json, text/plain', 
            'content-length': 176,
            'content-type': 'application/json;charset=UTF-8',
            'cookie': '_fbp=fb.1.1618838238381.1861024479; WZRK_G=dee6d540bbd149f0ad30d8835023d8df; connect.sid=s%3AMh_-aflxiAUWfjzSvylk738I4brNX6G-.B6bTVCR3giNbgHTXJWFX9O0n%2FL9hyRkYi2ynylavIOg; mp_a66867feba42257f4b46689d52d48f86_mixpanel=%7B%22distinct_id%22%3A%20%22x5rle%22%2C%22%24device_id%22%3A%20%22178ea4745a08d-00ad6affc6bf4f-3f356b-100200-178ea4745a13e0%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22%24user_id%22%3A%20%22x5rle%22%2C%22Supplier_id%22%3A%20855%2C%22Supplier_tag%22%3A%20%22x5rle%22%7D; WZRK_S_RZ5-867-4W5Z=%7B%22p%22%3A2%2C%22s%22%3A1621228741%2C%22t%22%3A1621228888%7D',
            'origin': 'https://supplier.meeshosupply.com',
            'referer': 'https://supplier.meeshosupply.com/x5rle/orders',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
        },
        data: {
            'identifier': "x5rle", 'supplier_id': 855, 'status': 5, 'groups': []},
            'enable_hold': true,
            'filter': {'order_date': {min: "2021-04-25T00:00:00+05:30", max: "2021-05-05T00:00:00+05:30"}},
            'groups': [],
            'identifier': "x5rle",
            'status': 5,
            'supplier_id': 855 
        
        }
    
    )).pipe(
         // @ts-ignore
        operators.filter(response => response.status ===200),
        // @ts-ignore
        operators.flatMap(response=>response.data.data.orders)

    )
}



FetchApi("https://supplier.meeshosupply.com/api/v1/order/fetch/all").subscribe(console.log)

