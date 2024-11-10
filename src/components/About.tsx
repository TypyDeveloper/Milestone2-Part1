import "@/style/Hero.css"
import Image from "next/image";
import Education from "./Education";

function Hero(){
    return(
        <div className="Hero-main-container">
        <div className="Hero-second-container">
             {/* {right-div} */}
             <div className="Hero-box1">
                <h3 className="Hero-h1">About us

                </h3>
                <hr />
                <p className="Hero-p1">I've experience in many languages like Typescript, Javascript, HTMl , CSS and Next JS Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita laboriosam consectetur vel necessitatibus fuga aspernatur ea qui pariatur! Optio quibusdam aspernatur autem nihil quod quidem itaque, laudantium minus ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque ducimus nisi mollitia, esse, fugiat iusto ea deserunt impedit quia expedita sint odit enim est nostrum, saepe autem molestiae tenetur?


                </p>
                <button className="Hero-btn">Learn More</button>


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