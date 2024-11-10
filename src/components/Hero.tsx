import "@/style/Hero.css"
import Image from "next/image";

function Hero(){
    return(
        <div className="Hero-main-container">
        <div className="Hero-second-container">
             {/* {right-div} */}
             <div className="Hero-box1">
                <h3 className="Hero-h1">Hy, I'm <strong> Hala farooqui</strong> a Professional UI/UX Designer

                </h3>
                <p className="Hero-p1">I've experience in many languages like Typescript, Javascript, HTMl , CSS and Next JS</p>
                <button className="Hero-btn">Hire Me</button>


            </div>
            {/* {left-div} */}
            <div className="Hero-box2">
                <Image src={"/images/hijab girl.png"} alt="profileimage" width={200} height={300} className="Hero-image"></Image>

            </div>
           

        </div>
        </div>
    )
}
export default Hero;