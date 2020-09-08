import React, {useState} from 'react';
import {Badge, Card, Collapse} from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const Job = ({job}) => {
    const [open, setOpen] = useState(false)
    return (
        <Card className='m-2' style={{borderRadius: 5}}>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Card.Title>
                            {job.title} -
                            <span className='text-muted'>
                            {job.company}
                        </span>
                        </Card.Title>
                        <Card.Subtitle className='text-muted'>
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <div className='d-flex mt-2'>
                            <h6><Badge variant="secondary">{job.type}</Badge></h6>
                            <h6 className='mx-2'><Badge variant="secondary">{job.location}</Badge></h6>
                        </div>
                        <div style={{wordBreak: 'break-all'}}>
                            <ReactMarkdown source={job.how_to_apply}/>
                        </div>
                        <div>
                            <button onClick={() => setOpen(prevOpen => !prevOpen)} className='btn btn-primary btn-sm'>{open ? 'Hide Details': 'Show Details'}</button>
                        </div>
                        <Collapse in={open}>
                            <div className='mt-4'>
                                <ReactMarkdown source={job.description}/>
                            </div>
                        </Collapse>
                    </div>
                    <div className='d-none d-md-block'>
                        <img alt={job.company} src={job.company_logo} height='50' width='50'/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Job;
