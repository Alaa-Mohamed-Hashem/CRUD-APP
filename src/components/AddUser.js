import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

import { v4 as uuid } from 'uuid';

const AddUser = () => {
   const [name, setName] = useState('');
   const { addUser } = useContext(GlobalContext);
   const history = useHistory();

   const submitHandler = (e) => {
      e.preventDefault();

      if (name.trim().length === 0) return

      addUser({ id: uuid(), name: name });
      history.push('/');
   };

   const changeName = (e) => {
      setName(e.target.value)
   }

   return (
      <Form onSubmit={submitHandler}>
         <FormGroup >
            <Label className="add_user">Name</Label>
            <Input
               value={name}
               onChange={changeName}
               placeholder="Enter Name"
               style={{ margin: '1rem auto' }}
            />
         </FormGroup>
         <Button type="submit" className="submit btn btn-primary">Add</Button>
         <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form >
   )
}

export default AddUser;
