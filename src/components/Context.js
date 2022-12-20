import React, { useState, useEffect, createContext } from "react";
import emptyStar from '../images/Star 10.png';
import emptyEllipse from '../images/Ellipse 42.png';

export const CoffeShopContext = createContext();

const Context = (props) => {

//    const [vaga, setVaga] = useState(0);
//     const [price, setPrice] = useState(item.price[0]);

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
   

    const value = {
        grade,
        kislinka,
        gorchinka,
        nasishenost

    };
    return (
        <CoffeShopContext.Provider value={value}>{props.children}</CoffeShopContext.Provider>
    )
}
export default Context;