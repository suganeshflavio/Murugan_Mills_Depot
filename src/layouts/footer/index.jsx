import { Link } from "react-router-dom";
// import FooterLogo from "../../components/footer-logo";

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-content">
                            <div className="widget-item">
                                <div className="widget-footer-nav">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/about"
                                                    }
                                                >
                                                    about
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/contact"
                                                    }
                                                >
                                                    contact
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/"
                                                    }
                                                >
                                                    map
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="widget-item text-center">
                                <div className="about-widget">
                                    {/* <FooterLogo
                                        image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                    /> */}
                                    <Link to={process.env.PUBLIC_URL + "/"}>
                                        <h3>Murugan Mills Depot</h3>
                                    </Link>
                                </div>
                                <div className="widget-copyright">
                                    <p>
                                        © {year}{" "}
                                        <Link to={process.env.PUBLIC_URL + "/"}>
                                            <span>Murugan Mills Depot</span>
                                        </Link>{" "}
                                        | All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            <div className="widget-item">
                                <ul className="widget-social">
                                    <li className="social-text">
                                        <span>follow us on social</span>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
