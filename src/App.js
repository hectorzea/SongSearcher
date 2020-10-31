import React, {Fragment, useState, useEffect} from 'react';
import Form from "./components/Form";
import axios from "axios";
import Song from "./components/Song";
import Band from "./components/Band";

const App = () => {

    const [searchLyrics, setSearchLyrics] = useState({});
    const [lyric, setLyric] = useState('');
    const [band, setBand] = useState({});

    useEffect(() => {
        if (Object.keys(searchLyrics).length === 0) return;
        const fetchAPI = async () => {
            const {band, song} = searchLyrics;
            const urlLyrics = `https://api.lyrics.ovh/v1/${band}/${song}`;
            const urlBand = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${band}`;

            const [lyric, bandData] = await Promise.all([axios(urlLyrics), axios(urlBand)]);
            setLyric(lyric.data.lyrics);
            setBand(bandData.data.artists[0]);
        };
        fetchAPI();
    }, [searchLyrics]);


    return (
        <Fragment>
            <Form setSearchLyrics={setSearchLyrics}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Band band={band}/>
                    </div>
                    <div className="col-md-6">
                        <Song lyric={lyric}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;