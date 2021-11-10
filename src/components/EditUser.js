import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { GlobalContext } from '../context/GlobalState';

const EditUser = (props) => {
   const [selectedUser, setSelectedUser] = useState({
      id: '',
      name: ''
   });

   const { users, editUser } = useContext(GlobalContext);

   const history = useHistory();
   const currentUserId = props.match.params.id;

   useEffect(() => {
      const userId = currentUserId;
      const selectUser = users.find(user => user.id === userId);
      setSelectedUser(selectUser);
   }, [users, currentUserId]);


   const changeUser = (e) => {
      setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
   };

   const submitHandler = (e) => {
      e.preventDefault();

      if (selectedUser.name.trim().length === 0) return

      editUser(selectedUser)

      history.push('/');
   };
   return (
      <Form onSubmit={submitHandler}>
         <FormGroup >
            <Label className="label">Name</Label>
            <Input onChange={changeUser} name="name" value={selectedUser.name} placeholder="Enter Name" style={{ margin: '1rem auto' }} />
         </FormGroup>
         <Button type="submit" className="btn btn-warning">Edit</Button>
         <Link to="/" className="btn btn-danger cancel">Cancel</Link>
      </Form>
   )
}

export default EditUser;
