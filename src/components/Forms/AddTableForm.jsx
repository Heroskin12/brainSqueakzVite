"use client";
import React from 'react'
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { useState } from 'react';


const AddTableForm = (props) => {
    const [formData, setFormData] = useState({
        tableName: "",
        columnName: ""
    });
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value }));
        console.log(formData)
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        const newTable = {
            tableName: formData.tableName,
            columnName: formData.columnName
        }
        
        fetch('http://localhost:5000/Tables', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               tableName: newTable.tableName,
               columnName: newTable.columnName
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
            <Label htmlFor="columnName" value="Enter column name..."  className="text-primary-white"/>
            </div>
            <TextInput id="columnName" type="text" placeholder="E.g. Name of Resource..." name="columnDetails" value={formData.columnName} onChange={handleChange} required />
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