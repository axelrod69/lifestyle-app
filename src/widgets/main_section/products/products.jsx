import "./products.css";
import camera from "../images/camera.jpg";
import watch from "../images/watch.jpg";
import shirts from "../images/shirts.jpg";

const Products = () => {
    return(
        <div className="products">
        <div className="items">
            <div>
                <div style={{
                    width : "100%",
                    height : "70%",
                    backgroundColor : "lightblue"
                }}>
                    <img src={camera} alt="Cameras"></img>
                </div>
                <div className="details">
                    <div style={{
                        fontWeight : "bold"
                    }}>Cameras</div>
                    <div style={{
                        fontSize : "12px"
                    }}>Choose Among The Best Available In The World</div>
                </div>
            </div>
            <div>
                <div style={{
                    width : "100%",
                    height : "70%",
                    backgroundColor : "lightblue"
                }}>
                    <img src={watch} alt="Watches"></img>
                </div>
                <div className="details">
                    <div style={{
                        fontWeight : "bold"
                    }}>Watches</div>
                    <div style={{
                        fontSize : "12px"
                    }}>Original Watches From The Best Brands</div>
                </div>
            </div>
            <div>
                <div style={{
                    width : "100%",
                    height : "70%",
                    backgroundColor : "lightblue"
                }}>
                    <img src={shirts} alt="Shirts"></img>
                </div>
                <div className="details">
                    <div style={{
                        fontWeight : "bold"
                    }}>Shirts</div>
                    <div style={{
                        fontSize : "12px"
                    }}>Our Exquisite Collection Of Shirts</div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Products;