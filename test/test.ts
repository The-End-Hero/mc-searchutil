import Pinyin from 'mc-searchutil'



const data =[
    {id:1,name:'sss'},
    {id:2,name:'as'},
    {id:3,name:'ssfffs'},
    {id:4,name:'swwwss'},
]

const end = Pinyin.getFilterArr(data,'ww','name')
console.log(end,'end')
