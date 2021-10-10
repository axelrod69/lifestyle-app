import "./main_section.css";
import gadget_image from "./images/gadget.jpg";
import Products from "./products/products";

const MainSection = () => {
    return(
        <div className="main_section">
            <div className="picture_background" style={{
                background : `url(${gadget_image})`,
                backgroundRepeat : "no-repeat",
                backgroundSize : "cover"
            }}>
                <div className="shop_now_box">
                    <div style={{
                        fontSize: "40px"
                    }}>
                        We Sell Lifestyle.
                    </div>
                    <div>
                        Flat 40% off on premium brands
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
            <Products></Products>
        </div>
    );
}

export default MainSection;