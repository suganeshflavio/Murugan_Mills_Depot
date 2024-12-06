import PropTypes from "prop-types";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="single-portfolio">
            <LightgalleryProvider>
                <LightgalleryItem
                    group="any"
                    src={process.env.PUBLIC_URL + portfolio.homeImage}
                >
                    <div className="thumbnail">
                        <div className="overlay">
                            <img
                                src={
                                    process.env.PUBLIC_URL + portfolio.homeImage
                                }
                                alt="portfolio"
                            />
                        </div>
                    </div>
                </LightgalleryItem>
            </LightgalleryProvider>
            {/* <div className="content">
                <h3 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/portfolio-details/${portfolio.id}`
                        }
                    >
                        {portfolio.title}
                    </Link>
                </h3>
            </div> */}
            <h5
                className="desc"
                style={{
                    textAlign: "center",
                    marginTop: "18px",
                    marginBottom: "5px",
                    display: "none",
                }}
            >
                <Link
                    to={
                        process.env.PUBLIC_URL +
                        `/portfolio-details/${portfolio.id}`
                    }
                >
                    {portfolio.excerpt}
                </Link>
            </h5>
        </div>
    );
};

PortfolioItem.propTypes = {
    portfolio: PropTypes.object,
};

export default PortfolioItem;
