"use client";
import React from 'react'
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { useState } from 'react';


const EditForm = (props) => {
    console.log(props);

    const [formData, setFormData] = useState({
        resourceName: props.rowDetails.resourceName,
        url: props.rowDetails.url,
        category: props.rowDetails.category,
        comments: props.rowDetails.comments
    });
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value }));
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        
        fetch(`http://localhost:5000/${props.tableName}/${props.rowDetails.id}`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                resourceName: formData.resourceName,
                url: formData.url,
                category: formData.category,
                comments: formData.comments
            })
        }).then(response => response.json())
        .then(console.log('Attempted'))

        // props.fetchValues()
    }

  return (
    <form className="flex max-w-md flex-col gap-4">

        <div>
            <div className="mb-2 bloc">
            <Label htmlFor="resourceName" value="Resource Name" className="text-primary-white" />
            </div>
            <TextInput id="resourceName" type="text" placeholder="Enter resource name..."name="resourceName" value={formData.resourceName} onChange={handleChange} required />
        </div>

        <div>
            <div className="mb-2 block">
            <Label htmlFor="URL" value="Enter url... "  className="text-primary-white"/>
            </div>
            <TextInput id="URL" type="text" placeholder="https://..." name="url" value={formData.url} onChange={handleChange} required />
        </div>

        <div>
            <div className="mb-2 block">
            <Label htmlFor="Category" value="Enter category... " className="text-primary-white"/>
            </div>
            <TextInput id="Category" type="text" placeholder="Enter category name..." name="category" value={formData.category} onChange={handleChange} required />
        </div>

        <div>
            <div className="mb-2 block">
            <Label htmlFor="Comments" value="Enter any extra comments... " className="text-primary-white"/>
            </div>
            <TextInput id="Comments" type="text" placeholder="Enter comments name..." name="comments" value={formData.comments} onChange={handleChange} />
        </div>

        <Button type="submit" className='bg-primary-accent b-0 outline-none border-none' onClick={submitForm}>Submit</Button>
    </form>
  );
}

export default EditForm;