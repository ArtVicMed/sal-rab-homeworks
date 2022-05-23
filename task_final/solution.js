







































function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order: {}};
      
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }

    data.address = ' 'street: '',house: '',entrance: '',floor: '',flat: ', ';
    
    data.sum = sum;
 
    data.client = ''name + '' + phone'';

    let jsonData = JSON.stringify({data: data});

    return jsonData;
};
