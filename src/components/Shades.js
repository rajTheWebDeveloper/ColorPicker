import React from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shades = ({colors,copyToClipboard}) => {
  return (
    <StyledShades>
      {console.log(colors)}
      <section className="shades w-[100vw]">

        {colors.map((items, idx) => {
          let { hex,weight } = items;

          return (
            <article
              role="color-box"
              onClick={() => copyToClipboard(hex)}
              className={`h-[120px] cursor-pointer text-left flex flex-col justify-center items-center ${
                idx < 10 ? "text-black" : "text-white"
              }`}
              style={{ backgroundColor: `#${hex}` }}
              key={idx}
            >
              <p>{weight}%</p>
              <h2>#{hex.toUpperCase()}</h2>
            </article>
          );
        })}
      </section>
      <ToastContainer/>
    </StyledShades>
  );
}


let StyledShades = styled.section`
  .shades {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  }
`;




export default Shades