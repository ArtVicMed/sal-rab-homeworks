

constexpected = {
    data: {
        client: '',
        order: {
            address: '',
            sum: 
        },
        goods: [
            {
                title: '',
                count: 
            }
        ]
    }
};

const name = '';
        const phone = '';
        constaddress= {
            street: '',
            house: '',
            entrance: "",
            floor: "",
            flat: '',
        };
        const goods = [
            {
                id: ,
                title: '',
                count: ,
                price: ''
            }
        ];
        const sum = ;
        const received = JSON.parse(sendRequest(name, phone, address, goods, sum));
        expect(received).toEqual(expected);
    });

function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order: {}};
      
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        let goods = {title: "", count: 2};
        data.goods.push(goods[i].title);
    }

    data.address = {
        street: '',
        house: '',
        entrance: '',
        floor: '',
        flat: '',
      };
    data.sum = sum;
 
    data.client = name + phone;

    let jsonData = JSON.stringify({data: data});

    return jsonData;
}

const name = '';
        const phone = '';
        const address = {
            street: '',
            house: '',
            entrance: '',
            floor: '',
            flat: '',
        };
        const goods = [
            {
                id: ,
                title: '',
                count: ,
                price: ''
            },
            {
                id: ,
                title: '',
                count: ,
                price: ''
            },
        ];
        const sum = ;

        const received = JSON.parse(sendRequest(name, phone, address, goods, sum));
        expect(received).toEqual(expected);
    });
})