import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AboutUsBase, AboutUsContent } from "../css/style";
import image1 from "../images/Analytic.png"


export default class AboudUs extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        Aos.init({
            duration: 2000
        })
    }



    render() {
        return (
            <AboutUsBase id="about">
                <h1>About Us</h1>
                <AboutUsContent>
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" src={image1} alt="" />
                    <div>

                    <p data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="2000"
                        data-aos-duration="2000">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate vitae adipisci fuga eius dolorum. Commodi, reprehenderit ut voluptatem nobis delectus quos officia sequi sint ipsum doloribus enim distinctio illo ad saepe nulla nam repellat adipisci veritatis architecto rerum repellendus quidem sed mollitia fugiat.</p>
                    <br/>
                    <p data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="2000"
                        data-aos-duration="2000">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate vitae adipisci fuga eius dolorum. Commodi, reprehenderit ut voluptatem nobis delectus quos officia sequi sint ipsum doloribus enim distinctio illo ad saepe nulla nam repellat adipisci veritatis architecto rerum repellendus quidem sed mollitia fugiat.</p>
                    </div>


                </AboutUsContent>

            </AboutUsBase>
        )
    }
}
