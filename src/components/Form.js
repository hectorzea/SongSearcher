import React, {useState} from 'react';

const Form = ({setSearchLyrics}) => {

    const [search, setSearch] = useState({
        band: '',
        song: ''
    });

    const [error, setError] = useState(false);

    const updateState = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    const {band, song} = search;

    const searchLyrics = (e) => {
        e.preventDefault();
        if (band.trim() === '' || song.trim() === '') {
            setError(true);
        }
        setError(false);
        setSearchLyrics(search);
    };

    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2"> All fields are required</p> : null}
            <div className="container">
                <div className="row">
                    <form onSubmit={searchLyrics} className="col card text-white bg-transparent mb5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">
                                Song Lyrics Search
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Band</label>
                                        <input onChange={updateState} type="text" className='form-control' name='band'
                                               placeholder='name of the band' value={band}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Song</label>
                                        <input onChange={updateState} type="text" className='form-control' name='song'
                                               placeholder='name of the song' value={song}/>
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary float-right'>Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;