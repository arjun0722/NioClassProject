import React, { useState } from 'react'
import "./index.css"
import EChartsReact from 'echarts-for-react';
function BarChart() {
let final ; 
let count = 0;

const initialValue = {
    easy : 0,
    medium : 0,
    hard : 0
}
const [data,setData] = useState(initialValue)
const [arr , setArr] = useState([])

const handleChange=(e)=>{
 const {name , value} = e.target
 setData( {
    ...data,
    [name] : value
 })
}

const handleRefresh=()=>{
final = Object.values(data).map(Number)

final.filter((e)=>{
    if(e > 100 || e < 1){
     count ++
    }
})
if(count === 0 ){
  setArr(final)
}else{
  alert("number should be less than 100 and more than 1")

}
}


const option = {
    xAxis: {
      type: 'category',
      data: ['Easy', 'Medium', 'Hard' ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: arr.map((e)=> e),
        type: 'bar'
      }
    ]
  };

  return (
    <div className='main'>
        <h1>NioClass</h1>
        <EChartsReact option={option}/>
        <div className='container'>
            <input onChange={handleChange} name="easy" value={data.easy} className='input' type="number" placeholder='easy' min="1" max="100"/>
            <input onChange={handleChange} className='input' name='medium' value={data.medium} type="number" placeholder = "medium" min="1" max="100"/>
            <input onChange={handleChange} className='input' name='hard' value={data.hard} type="number" placeholder='hard' min="1" max="100"/>
            <button onClick ={handleRefresh} className='btn'>Refresh</button>
        </div>
    </div>
  )
}

export default BarChart