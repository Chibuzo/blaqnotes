import React from "react";

const Panel = props => {
    const { title, col, header, header_icon } = props;
    const _col = col ? col : "12";
    const h_icon = header_icon ? `<i className="fa ${header_icon}"</i> &nbsp;` : '';

    return (
        <div className={`col-md-${_col}`}>
            <section className="panel">
                {header &&
                    <header className="panel-heading tab-bg-dark-navy-blue">
                        {title}
                    </header>
                }
                <div className="panel-body">
                    {!header && <p className="lead">{h_icon}{title}</p>}
                    <br />

                    {props.children}
                </div>
            </section>
        </div>
    );
}

export default Panel;