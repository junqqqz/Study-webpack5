import '@babel/polyfill';
import './index.less';
let btn = document.getElementById('btn');
btn.onclick = () =>{
    alert('hello word');
}
let m=10;
console.log(m);
fetch("/jian/subscriptions/recommended_collections")
    .then(response => response.json())
    .then(value => {
        console.log('简书：', value);
    });
fetch("/zhi/news/latest")
    .then(response => response.json())
    .then(value => {
        console.log('知乎', value);
    }); 