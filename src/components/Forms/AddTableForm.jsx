"use client";
import React from 'react'
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { useState } from 'react';


const AddTableForm = (props) => {
    const [formData, setFormData] = useState({
        tableName: "",
        columnDetails: [],
    });
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value }));
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        const newTable = {
            tableName: formData.tableName,
            columnDetails: formData.columnDetails
        }
        
        fetch('http://localhost:5000/Tables', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               tableName: newTable.tableName,
               columnDetails: [newTable.columnDetails]
            })
        }).then(response => response.json())
        .then(console.log(newTable))

        props.fetchTables()
    }
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 bloc">
          <Label htmlFor="tableName" value="Table Name" className="text-primary-white" />
        </div>
        <TextInput id="tableName" type="text" placeholder="Enter table name..."name="tableName" value={formData.tableName} onChange={handleChange} required />
      </div>
      <div className='flex items-center'>
        <div className="flex-col">
            <div className="mb-2 block">
            <Label htmlFor="column1" value="Enter column name..."  className="text-primary-white"/>
            </div>
            <TextInput id="column-1" type="text" placeholder="E.g. Name of Resource..." name="columnDetails" value={formData.columnDetails} onChange={handleChange} required />
        </div>
        <div className="max-w-md flex-col ps-4">
            <div className="mb-2 block text-left">
                <Label htmlFor="dataType" value="Data type" className="text-primary-white" />
            </div>
            <Select id="dataType" required>
                <option>Text</option>
                <option>Link</option>
                <option>Number</option>
                <option>Date</option>
                <option>Time</option>
            </Select>
        </div>
        <div className='pt-7 ml-5'>
            <span className='text-2xl text-primary-white px-4 bg-primary-grey rounded-lg'>+</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className='text-primary-white'>Remember me</Label>
      </div>
      <Button type="submit" className='bg-primary-accent b-0 outline-none border-none' onClick={submitForm}>Submit</Button>
    </form>
  );
}

export default AddTableForm;