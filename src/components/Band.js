import React from 'react';

const Band = ({band}) => {
    if (Object.keys(band).length === 0) return null;
    const {strArtistThumb, strGenre, strBiographyEN} = band;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Band Information
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist Logo"/>
                <p className="card-text">Genre:{strGenre}</p>
                <h2>Biography:</h2>
                <p className="card-text">{strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${band.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${band.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${band.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Band;