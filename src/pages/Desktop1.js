import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import "./Desktop1.css";
import React,{useState} from 'react'
import { Line } from "react-chartjs-2";
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
} from 'chart.js'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
)
const numbers = [2,0,5,4,0];
function Array(x){
  numbers[4] = numbers[4]+parseInt(x);
  console.log(numbers)
}
const Desktop1 = () => {
  const[ans,setAns] = useState();
  const data = {
    labels:['17/01/23','18/01/23','19/01/23','20/01/23','21/01/23'],
    datasets:[{
      data:numbers,
    }]
  };
  const options = {};
  return (
    <div>
      <label>
        <p className="question">Q.1-Felt moments of sudden terror, fear, or fright in social situations</p>
        <input type = "radio" value = "2" name = "0" onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Never <br></br>
        <input type = "radio" value = "1" name = "0"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Occasionally<br></br>
        <input type = "radio" value = "0" name = "0"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Sometimes <br></br>
        <input type = "radio" value = "-1" name = "0"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Mostly <br></br>
        <input type = "radio" value = "-2" name = "0"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Always    <br></br>
      </label>

      <label>
        <p className="question">Q.2-I was very anxious, worried or scared about a lot of things in my life.</p>
        <input type = "radio" value = "2" name = "1" onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Never <br></br>
        <input type = "radio" value = "1" name = "1"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Occasionally<br></br>
        <input type = "radio" value = "0" name = "1"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Sometimes <br></br>
        <input type = "radio" value = "-1" name = "1"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Mostly <br></br>
        <input type = "radio" value = "-2" name = "1"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Always     <br></br>
      </label>
      <label>
        <p className="question">Q.3-I felt that my worry was out of control.</p>
        <input type = "radio" value = "2" name = "2" onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Never <br></br>
        <input type = "radio" value = "1" name = "2"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Occasionally<br></br>
        <input type = "radio" value = "0" name = "2"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Sometimes <br></br>
        <input type = "radio" value = "-1" name = "2"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Mostly <br></br>
        <input type = "radio" value = "-2" name = "2"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Always <br></br>

      </label>
      <label>
        <p className="question">Q.4-I felt restless,agitated or tensed.</p>
        <input type = "radio" value = "2" name = "3" onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Never <br></br>
        <input type = "radio" value = "1" name = "3"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Occasionally <br></br>
        <input type = "radio" value = "0" name = "3"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Sometimes <br></br>
        <input type = "radio" value = "-1" name = "3"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Mostly <br></br>
        <input type = "radio" value = "-2" name = "3"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Always     <br></br>
      </label>
      <label>
        <p className="question">Q.5-I had trouble sleeping,I didn't feel well rested.</p>
        <input type = "radio" value = "2" name = "4" onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Never <br></br>
        <input type = "radio" value = "1" name = "4"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Occasionally<br></br>
        <input type = "radio" value = "0" name = "4"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Sometimes <br></br>
        <input type = "radio" value = "-1" name = "4"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Mostly <br></br>
        <input type = "radio" value = "-2" name = "4"  onChange={e => {setAns(e.target.value); Array(e.target.value)}}/>: Always     <br></br>
      </label>
      <button input type = "submit">SUBMIT</button>
      <div style = {
        {
          width:'600px',
          height:'600px'
        }
      }>
      <Line data = {data} options = {options}></Line>
      </div>
    </div>
  );
};

export default Desktop1;