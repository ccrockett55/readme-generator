import React, { useState } from 'react';
import './readme.css';
import Footer from './Footer';



export default function Readme({addProject}) {
   
    const [projectInfo, setProjectInfo, setIsChecked, isChecked] = useState({
        ptitle: "",
        pdescription: "",
        pcontents: "",
        prun: "",
        pusage: "",
        pcollaborators: "",
        pcheck: ""

    });
//allows data to be entered into fields
    const handleChange = (event) => {      
        setProjectInfo({...projectInfo, [event.target.name]: event.target.value});
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addProject(projectInfo);  
//clear fields once submit is clicked                
//        setProjectInfo({ptitle: "", pdescription: "", pcontents: "", prun: "", pusage: "", pcollaborators: ""});
       
        }
    
    
    

    return (
    <div className='container'>
        <p className='title-style'>README File Generator</p>
     <form  onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-label label-title'>Project Title</label>
            <p className='label-text'>What is the name of your project?</p>
            <input type="text" name='ptitle' className='form-control' value={projectInfo.ptitle} onChange={handleChange} required />
        </div>
        <div className='mb-3'>
            <label className='form-label label-title'>Project Descritption</label>
            <p className='label-text'>Explain what the purpose of your project is. Which technologies were used and why?
                If you faced any challenges or plan to add new features in the future.</p>
            <textarea type='text' name='pdescription' className='form-control' value={projectInfo.pdescription} onChange={handleChange} row='3' />
        </div>
        <div className='mb-3'>
            <label className='form-label label-title'>Table of Contents (optional)</label>
            <p className='label-text'>If your project has a bunch of content to read through, consider adding a table of contents to 
                                        make it easier for your users to cruise through. Create a new line for each entry.</p>
            <textarea type='text' name='pcontents' className='form-control' value={projectInfo.pcontents} onChange={handleChange} row='3' />
            
        </div>
        <div className='mb-3'>
            <label className='form-label label-title'>How to run or install your project</label>
            <p className='label-text'>If your project requires installation, give instructions on how to intall and run it.</p>
            <textarea type='text' name='prun' className='form-control' value={projectInfo.prun} onChange={handleChange} row='3' />
        </div>
        <div className='mb-3'>
            <label className='form-label label-title'>How to use your project</label>
            <p  className='label-text'>Provide instructions on how to use your project.</p>
            <textarea type='text' name='pusage' className='form-control' value={projectInfo.pusage} onChange={handleChange} row='3' />
        </div>
        <div className='mb-3'>
            <label className='form-label label-title'>Collaborators</label>
            <p className='label-text'>List anyone you would like to give a shoutout to that also worked on this project.</p>
            <textarea type='text' name='pcollaborators' className='form-control' value={projectInfo.pcollaborators} onChange={handleChange} row='3' />
        </div>
     
        <button type='submit' className='btn btn-primary'>Create README File</button> 
        <br /><br />
     </form>
     </div>
    )
    
};

