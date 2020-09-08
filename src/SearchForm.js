import React from 'react';

const SearchForm = ({params, onParamChange}) => {
    return (
        <div className='ml-2 my-4'>
            <div className='row'>
                <div className="col-md-4">Job Description</div>
                <div className="col-md-4">Location</div>
            </div>
            <div className='row'>
                <div className="col-md-4">
                    <input onChange={onParamChange} type="email" className="form-control" id="description" name='description'
                           placeholder="Filter by title, benefits, companies, expertise" value={params.description}/>
                </div>
                <div className="col-md-4">
                    <input onChange={onParamChange} type="text" className="form-control" id="location" name='location'
                           placeholder="Filter by city, state, zip code or country" value={params.location}/>
                </div>
                <div className="col-md-2 pt-2">
                    <input onChange={onParamChange} name='full_time' className="form-check-input" type="checkbox" id="full-time" value={params.full_time}/>
                    <span>Full Time Only</span>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
