







































function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [{title: goods[i].title, count: goods[i].count}], order: {address: data.address, sum: data.sum}};
      
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }

    data.address = ' 'street: ' + ',house: ' + ',entrance: ' + ',floor: ' + ',flat: ', ';
    
    data.sum = sum;
 
    data.client = ''name + '' + phone'';

    let jsonData = JSON.stringify({data: data});

    return jsonData;
};
