







































function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order: {}};
      
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        goods = {title: goods.title, count: goods.count};
        data.goods.push(goods);
    }

    data.address = 'street: '',house: '',entrance: '',floor: '',flat: '', ';
    
    data.sum = sum;
 
    data.client = 'name + '' + phone';

    let jsonData = JSON.stringify({data: data});

    return jsonData;
};
