import React, { useState } from "react";
import PortfolioFilter from "../../../components/portfolio/portfolio-filter";
import PortfolioItem from "../../../components/portfolio/portfolio-item";
import PortfolioData from "../../../data/portfolio.json";
import useMasonry from "../../../hooks/use-masonry";
import { slugify } from "../../../utils";
import AboutData from "../../../data/global/about.json";
import "./Style.css";

const PortfolioContainer = () => {
    // Isotope Categories list JS

    const { categories } = useMasonry(
        PortfolioData,
        ".portfolio-list",
        ".masonry-grid",
        ".messonry-button",
        ".messonry-button button"
    );

    const [showDialog, setShowDialog] = useState(false);
    const [currentPdf, setCurrentPdf] = useState(null);

    const handleLogoClick = (pdfPath) => {
        setCurrentPdf(pdfPath); // Set the PDF path for the modal
        setShowDialog(true); // Open the modal
    };

    const handleClose = () => {
        setShowDialog(false); // Close the modal
        setCurrentPdf(null); // Reset the PDF path
    };
    return (
        <div className="portfolio-area portfolio-default-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="messonry-button text-center mb-50">
                            <PortfolioFilter categories={categories} />
                        </div>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
                    <div className="col resizer"></div>
                    {PortfolioData &&
                        PortfolioData.map((portfolio) => (
                            <div
                                key={portfolio.id}
                                className={`col masonry-grid mb-30 ${portfolio.categories
                                    .map((cat) => slugify(cat))
                                    .join(" ")}`}
                            >
                                <PortfolioItem portfolio={portfolio} />
                            </div>
                        ))}
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center mt-60">
                        <div className="container py-5">
                            {/* Section Header */}
                            <h2 className="text-center mb-5">
                                We are Certificated at
                            </h2>

                            {/* Carousel */}
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="row">
                                        {AboutData[6].brand &&
                                            AboutData[6].brand.map((logo) => (
                                                <div
                                                    key={logo.id}
                                                    className="col-4 text-center mb-4"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleLogoClick(
                                                                logo.pdfPath
                                                            )
                                                        }
                                                        style={{
                                                            background: "none",
                                                            border: "none",
                                                            padding: 0,
                                                        }}
                                                    >
                                                        <img
                                                            src={logo.image}
                                                            alt={`Certificate ${logo.id}`}
                                                            className="img-fluid"
                                                            style={{
                                                                maxHeight:
                                                                    "150px",
                                                                objectFit:
                                                                    "contain",
                                                            }}
                                                        />
                                                    </button>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal */}
                            {showDialog && (
                                <div
                                    className="modal fade show"
                                    style={{
                                        display: "block",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                    tabIndex="-1"
                                >
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">
                                                    View Certificate
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    onClick={handleClose}
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <embed
                                                    src={currentPdf}
                                                    type="application/pdf"
                                                    width="100%"
                                                    height="500px"
                                                    style={{
                                                        border: "none",
                                                        minHeight: "500px",
                                                    }}
                                                />
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    onClick={handleClose}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioContainer;
