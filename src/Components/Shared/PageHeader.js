import React from "react";
import { Link } from "react-router-dom";

const PageHeader = props => {
    const { backBtn_path, backBtn_text } = props;
    return (
        <div className="col-md-12">
            <section className="panel">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-6">
                            {props.children}
                        </div>
                        <div className="col-md-1"></div>

                        <div className="col-md-2 pull-right text-right">
                            <small>ACTIVE SESSION</small>
                            <h6>
                                <strong>2018/2019</strong>
                            </h6>
                            <Link to={backBtn_path} className="btn btn-danger">
                                <i className="fa fa-caret-left"></i>&nbsp; {backBtn_text}
                            </Link>
                        </div>
                        <div className="col-md-2 pull-right text-center">
                            <small>SEMESTER</small>
                            <h6>
                                <strong>1st Semester</strong>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageHeader;