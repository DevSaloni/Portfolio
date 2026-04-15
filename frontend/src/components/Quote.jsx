import React from 'react';
import './Quote.css';

const Quote = () => {
    return (
        <div className="quote-container">
            <div className="quote-box">
                <span className="quote-mark">“</span>
                <p className="quote-text font-mono">
                    Real innovation isn't just about what you build, but the problems you solve. <br />
                    Precision and passion are the keys to crafting the future of the web.
                </p>
                <div className="quote-author">
                    <span className="dash">-</span> Professional Mindset
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
