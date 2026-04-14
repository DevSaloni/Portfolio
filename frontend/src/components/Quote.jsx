import React from 'react';
import './Quote.css';

const Quote = () => {
    return (
        <div className="quote-container">
            <div className="quote-box">
                <span className="quote-mark">“</span>
                <p className="quote-text font-mono">
                    Control can sometimes be an illusion. <br />
                    But sometimes you need illusion to gain control.
                </p>
                <div className="quote-author">
                    <span className="dash">-</span> Mr. Robot
                </div>
                <span className="quote-mark end">”</span>

                {/* Decor */}
                <div className="quote-decor top-left"></div>
                <div className="quote-decor bottom-right"></div>
            </div>
        </div>
    );
};

export default Quote;
