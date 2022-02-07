import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function AddButon() {
  return (
      <Link style={{textDecoration: 'none'}}
      to='/addUser'>
      <Button variant='outlined' endIcon={<AddCircleOutlineOutlinedIcon/>}>
          New User
      </Button>
      </Link>
  );
}
export default AddButon;
