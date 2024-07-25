import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from './CreateJobBtn'
import Typography from '@mui/material/Typography';
import JobPostForm from './JobPostForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid rgb(55, 65, 81)',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

export default function JobFormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div  className='relative'>
      {/* <Button  btnText='Create Job' /> */}
      <button type='button' onClick={handleOpen} className='px-4 py-2 text-white bg-gradient-to-r from-[#A128FF] to-[#6100AD] rounded-md'>Create Job</button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
       
      >
        <Box className="absolute bg-white dark:bg-black -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 lg:w-[800px] w-[400px] p-10 border-gray-700 rounded-lg">
          <h1 className='text-center text-lg font-semibold mb-10'>Create Job Opening</h1>
          <JobPostForm />
        </Box>
      </Modal>
    </div>
  );
}
