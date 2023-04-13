import React, {useState}from "react";
import './MovieRow.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default ({title, items}) => {
const[ScrollX, setScrollX] = useState(-500);

    const LeftArrow = () => {
        let x = ScrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);    
    }

    const rightArrow = () => {
        let x = ScrollX - Math.round(window.innerWidth / 2);
        let total = items.results.length * 150

        if((window.innerWidth - total) > x){
            x = (window.innerWidth - total) - 60;
        }

        setScrollX(x)
    }

    return (
        <div className="movieRow" >

            <h2>{title}</h2>
            <div className="buttonLeft" onClick={LeftArrow}>
               <ArrowBackIosIcon style={{fontSize:40}}/>
            </div>

            
            <div className="buttonRight" onClick={rightArrow}>
                <ArrowForwardIosIcon style={{fontSize: 40}}/>
            </div>
            
            <div className="movieRow--listArea">

                <div className="movieRow--list" style={{
                    marginLeft:ScrollX,
                    width: items.results.length * 150
                }}>

                {items.results.length > 0 && items.results.map((item, key) =>(
                    <div key={key} className="movieRow--item">

                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original-title} />

                    </div>
                ))}

                </div>
            </div>

        </div>
    );
}