import React from 'react';

const Breadcrumb = ({ pageTitle, pageCaption }) => {
    return (
        <div className="page-breadcrumb">
            <div className="row align-items-center">
                <div className="col-5">
                    <h4 className="page-title">Dashboard{pageTitle}</h4>
                    <div className="d-flex align-items-center">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Page{pageCaption}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="col-7">

                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;