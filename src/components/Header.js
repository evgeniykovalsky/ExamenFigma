import React,{useState} from "react";
import image25 from '../images/image25.png';
import korzina from '../images/korzina.png';
import enter from '../images/enter.png';
import lupa from '../images/lupa.png';

export default function Header(){
    const arOption=["Ничего не найдено","Ячменный напиток Millor - Здоровое питание","Ячменный напиток Millor - Здоровое питание"];
    const [look,setLook]=useState("Ячменный напиток Millor");
    const [rezFind,setRezFind]=useState('Ничего не найдено');

    const options=arOption.map((text,index)=>{
       return <option key={index}>{text}</option>
    });
    return (
       <div className="header">
       <div className="image25">
        <img src={image25} alt="image25"></img>
       </div>
       <div className="find">
          <div className="findUp">
          <img src={lupa} alt="lupa"></img>
          <input  type="text" className="lookInput" value={look} onChange={event=>setLook(event.target.value)} />
          </div>
          <div className="findDown">
           <select  value={rezFind} onChange={(event)=>setRezFind(event.target.value)}>
           {options}
           </select>
           sdlkfjslkfskdf
           lksdfjskldf
           lasfkdafjsdl
           lorem.10
           3
           asdfasdfkl;jasd;fjaskldfasldkfjasdljflasdkj dasl;djflaskdj
           \
           asdfasdfklasdf
           asdfasdfklasdfasdf\
           asdf\
           asdfasdf\
           asdf\
           asdf\
           asdf\
           asdf\
           asdf\
           asd
          </div>
         
        </div>
       <div className="korzina">
       <img src={korzina} alt="korzina"></img>
       </div>
        <div className="enter">
        <img src={enter} alt="enter"></img>
        </div>



       </div>
    )
}