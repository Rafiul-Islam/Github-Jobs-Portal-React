import React, {useState} from 'react';
import './App.css';
import UseFetchJobs from "./UseFetchJobs";
import Job from "./Job";
import JobPagination from "./JobPagination";
import SearchForm from "./SearchForm";

function App() {

    const handleParamChange = (e) => {
        const param = e.target.name
        const value = e.target.value

        setPage(1)
        setParams(prevParams => {
            return {...prevParams, [param]: value}
        })
    }

    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const {jobs, loading, error, hasNextPage} = UseFetchJobs(params, page)
    return (
        <div className='container my-5'>
            <h2 className='mb-4 ml-2'>Github <span style={{fontWeight: 400}}>Jobs</span></h2>
            <SearchForm params={params} onParamChange={handleParamChange}/>
            <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error. Try Refreshing.</h1>}
            {
                jobs.map(job => <Job key={job.id} job={job}/>)
            }
            <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        </div>
    );
}

export default App;
