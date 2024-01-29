import React, { useEffect, useState } from 'react'
import Values from "values.js";
import Shades from './Shades';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ColorGenerator = () => {

    let [input,setInput]=useState("FF00FF")
    let [colorPicker,setColorPicker]=useState("#FF00FF")
    let [colors, setColors] = useState(new Values("#FF00FF").all(10))

     const notify = (msg) => toast(msg.toUpperCase() + " Copied");
     const notifyClick = (msg) => toast(msg);

    let handleClick=()=>
    {
        try 
        {
            if(input.includes("#"))
            {
                setColors(new Values(input).all(10));
                notifyClick(input.charAt(0).toUpperCase()+" Shades Generated")
            }
            else 
            {
                setColors(new Values("#" + input).all(10))
                notifyClick(`#${input}`.toUpperCase() + " Shades Generated");
            }
        }
        catch(e)
        {
            console.log("We are talking insane numbers")
        }
    }

    let handleColorPicker=(e)=>
    {
        if (e.target.value.includes("#")) 
        {

            setInput(e.target.value);
            setColorPicker(e.target.value);
        }
        else 
        {
            setInput("#"+e.target.value);
            setColorPicker("#"+e.target.value);
        }
    }

    let copyToClipboard=(text)=>
    {
        navigator.clipboard.writeText("#"+text)
        notify("#" + text);
    }

      return (
        <section>
          <section className="bg-gray-50 w-[100vw] h-[25vh] px-6 flex justify-center items-center flex-col md:px-20 md:flex-row md:justify-start">
            <h2 className="text-xl tracking-wider md:mr-8">Color Generator</h2>
            <div className="tags flex items-center h-[35px] my-4">
              {console.log(colorPicker)}
              <label
                className={`color-picker h-[100%] w-[60px] md:w-[120px] flex items-center cursor-pointer`}
                style={{ backgroundColor: colorPicker }}
                htmlFor="color-picker"
              ></label>
              {console.log(colorPicker)}
              <input
                type="color"
                value={colorPicker}
                onChange={handleColorPicker}
                className="h-[100%] sr-only"
                id="color-picker"
              />
              <input
                type="text"
                value={input}
                role="text-box"
                onChange={(e) => setInput(e.target.value)}
                className="h-[100%] w-[60%] md:w-[100%] px-2 md:px-3 outline-none text-sm rounded-l-sm border-[2px] border-white focus:border-blue-400"
              />
              <button
                role="submit"
                onClick={handleClick}
                className="h-[100%] bg-black text-white px-4 rounded-r-md text-sm"
              >
                Submit
              </button>
            </div>
          </section>
          <Shades colors={colors} copyToClipboard={copyToClipboard} />
        </section>
      );
}

export default ColorGenerator