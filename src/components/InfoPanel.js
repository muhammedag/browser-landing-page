import React from 'react';

const InfoPanel = () => {
    return (
        <div className="info-panel">
            <div className="info-bg"></div>
            <div className="center">
                <button className="btn-search"><i className="fas fa-search"></i></button>

                <input type="text" name="search" placeholder="Another Location" className="search-input" />


                <div className="first list">
                    <div className="title">Weather Details</div>

                    <div className="value">
                        <div className="label">Wind:</div>
                        <div className="percent">2.6km</div>
                    </div>

                    <div className="value">
                        <div className="label">Minimum Temperature:</div>
                        <div className="percent">86%</div>
                    </div>

                    <div className="value">
                        <div className="label">Maximum Temperature:</div>
                        <div className="percent">86%</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default InfoPanel;
