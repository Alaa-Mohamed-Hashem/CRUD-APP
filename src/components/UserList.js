import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const UserList = () => {
   const { users, removeUser } = useContext(GlobalContext);

   let usersContent = <h4 className="text-center mt-4 no-user">No Users</h4>

   if (users.length > 0) {
      usersContent = <ListGroup className="mt-3">
         {users.map(user => (
            <ListGroupItem key={user.id} className="d-flex justify-content-between align-items-center">
               <strong>{user.name}</strong>
               <div className="ml-auto">
                  <Link to={`/edit/${user.id}`} className="btn btn-warning ml-2 edit-btn">Edit</Link>
                  <Button onClick={removeUser.bind(null, user.id)} color="danger">Delete</Button>
               </div>
            </ListGroupItem>
         ))}
      </ListGroup>
   }

   return (
      <div>
         {usersContent}
      </div>
   )
};

export default UserList;
