import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title }) => {
    return (
        <div className="section-header">
            <h2 className="header-title">
                <span className="hash">#</span>{title}
            </h2>
            <div className="header-line"></div>
        </div>
    );
};

export default SectionHeader;
