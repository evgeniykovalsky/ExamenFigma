import React, { useState, createContext } from "react";
import emptyStar from '../images/Star 10.png';
import emptyEllipse from '../images/Ellipse 42.png';

export const CoffeShopContext = createContext();

const Context = (props) => {

//    const [vaga, setVaga] = useState(0);
//     const [price, setPrice] = useState(item.price[0]);

 const [objarkaZerna, setObjarka] = useState(1);
 const[geografia,setGeografia]=useState("");
 const[kislinkaF,setKislinkaF]=useState("");
 const[processing_method,setProcessingMetod]=useState("");
 const[special,setSpecial]=useState("");
 const[vid_coffee,setVid_coffee]=useState("");
 const[pribor,setPribor]=useState("");

    const grade = (item) => {
        let c = [];
        for (let i = 0; i < item.grade; i++) {

            c.push(<img src="../images/Star 6.png" alt="star" />);
        }
        if (item.grade < 5) {
            for (let i = 0; i < (5 - item.grade); i++) {

                c.push(<img src={emptyStar} alt="emptyStar" />);
            }
        }

        return c;
    }
    const kislinka = (item) => {
        let c = [];
        for (let i = 0; i < item.kislinka; i++) {

            c.push(<img src="../images/Ellipse 36.png" alt="star" />);
        }
        if (item.kislinka < 10) {
            for (let i = 0; i < (10 - item.kislinka); i++) {

                c.push(<img src={emptyEllipse} alt="emptyStar" />);
            }
        }

        return c;
    }
    const gorchinka = (item) => {
        let c = [];
        for (let i = 0; i < item.gorchinka; i++) {

            c.push(<img src="../images/Ellipse 36.png" alt="star" />);
        }
        if (item.gorchinka < 10) {
            for (let i = 0; i < (10 - item.gorchinka); i++) {

                c.push(<img src={emptyEllipse} alt="emptyStar" />);
            }
        }

        return c;
    }
    const nasishenost = (item) => {
        let c = [];
        for (let i = 0; i < item.nasishenost; i++) {

            c.push(<img src="../images/Ellipse 36.png" alt="star" />);
        }
        if (item.nasishenost < 10) {
            for (let i = 0; i < (10 - item.nasishenost); i++) {

                c.push(<img src={emptyEllipse} alt="emptyStar" />);
            }
        }

        return c;
    }
    const objarkaImg = (count) => {
        let c = [];
        for (let i = 0; i < count; i++) {

            c.push(<img src="../images/oneZerno.png" alt="zerno" />);
        }
        
        return c;
    }

    const value = {
        grade,
        kislinka,
        gorchinka,
        nasishenost,
        objarkaImg,
        objarkaZerna,
        setObjarka,
        geografia,
        setGeografia,
        kislinkaF,
        setKislinkaF,
        processing_method,
        setProcessingMetod,
        special,
        setSpecial,
        vid_coffee,
        setVid_coffee,
        pribor,
        setPribor



    };
    return (
        <CoffeShopContext.Provider value={value}>{props.children}</CoffeShopContext.Provider>
    )
}
export default Context;