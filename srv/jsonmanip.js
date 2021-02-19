const data = require('./items.json')
fs = require('fs');

let newArr = [];

for (item of data) {
    let spliced = item.download_url.split('').splice(0,item.download_url.length-9).join('')
    //console.log(item.download_url.split('').splice(0,item.download_url.length-9).join(''))

    //console.log(spliced)

    if(spliced.split('')[spliced.length-1] !== '/') {
        newArr.push(spliced + '/800/800')
    } else {
        newArr.push(spliced + '800/800')
    }
}

for (item in newArr) {
    delete data[item].width
    delete data[item].height
    data[item].url = newArr[item]
    delete data[item].download_url
}

console.log(data)

fs.writeFile('meme.json', JSON.stringify(data), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
});