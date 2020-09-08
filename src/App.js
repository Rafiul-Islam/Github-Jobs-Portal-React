import React, {useState} from 'react';
import './App.css';
import UseFetchJobs from "./UseFetchJobs";
import Job from "./Job";

function App() {
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const {jobs, loading, error} = UseFetchJobs(params, page)
    return (
        <div className='container'>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error. Try Refreshing.</h1>}
            {
                jobs.map(job => <Job key={job.id} job={job}/>)
            }
        </div>
    );
}

export default App;
