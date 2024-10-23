import { Box, Button, Container, Grid2, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Home = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);

    const [blogs, setBlogs] = useState([]);
    const [blogId, setBlogId] = useState(null); 
    const [editFormData, setEditFormData] = useState({ title: '', description: '' });
    const [addFormData, setAddFormData] = useState({ title: '', description: '' });

    useEffect(() => {
        axios.get("http://localhost:3001/blogs")
            .then((res) => setBlogs(res.data))
    }, []);

    
    const handleOpenEdit = (blog) => {
        setEditFormData({
            title: blog.title,
            description: blog.description
        });
        setBlogId(blog.id);
        setOpenEdit(true);
    };

    const handleOpenAdd = () => {
        setAddFormData({ title: '', description: '' });
        setOpenAdd(true);
    };

    const handleCloseEdit = () => {
        setEditFormData({ title: '', description: '' });
        setOpenEdit(false);
    };

    const handleCloseAdd = () => {
        setAddFormData({ title: '', description: '' });
        setOpenAdd(false);
    };

    const handleEditInputChange = (e) => {
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value
        });
    };

    const handleAddInputChange = (e) => {
        setAddFormData({
            ...addFormData,
            [e.target.name]: e.target.value
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (blogId) {
            axios.put(`http://localhost:3001/blogs/${blogId}`, editFormData)
                .then((res) => {
                    setBlogs(blogs.map(blog => (blog.id === blogId ? res.data : blog)));
                    handleCloseEdit(); 
                });
        }
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/blogs", addFormData)
            .then((res) => {
                setBlogs([...blogs, res.data]);
                handleCloseAdd(); 
            });
    };

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3001/blogs/${id}`)
        .then(()=>{
            setBlogs(blogs.filter((b)=>b.id !== id))
        })
        .catch((error) => {
            console.error("error", error);
        });
    }

    return (
        <div>
            <Container style={{ marginTop: "50px" }}>
                <Grid2 container spacing={2} justifyContent='start'>
                    <Grid2>
                        <Button onClick={handleOpenAdd} variant='contained' color='primary'>Add Blog</Button>
                    </Grid2>
                </Grid2>

                <Grid2 style={{ marginTop: "30px" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Language</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {blogs.map((blog) => (
                                    <TableRow key={blog.id}>
                                        <TableCell component="th" scope="row">
                                            {blog.title}
                                        </TableCell>
                                        <TableCell align="center">{blog.description}</TableCell>
                                        <TableCell align="center">
                                            <Button onClick={() => { handleOpenEdit(blog) }}><EditIcon color='primary' /></Button>
                                            <Button onClick={() => { handleDelete(blog.id) }}><DeleteIcon color='error' /></Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid2>

                {/* Edit Blog Modal */}
                <Modal
                    open={openEdit}
                    onClose={handleCloseEdit}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Edit Blog
                        </Typography>
                        <form onSubmit={handleEditSubmit}>
                            <TextField
                                fullWidth
                                required
                                label="Title"
                                name="title"
                                value={editFormData.title}
                                onChange={handleEditInputChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Description"
                                name="description"
                                value={editFormData.description}
                                onChange={handleEditInputChange}
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                                Save Changes
                            </Button>
                        </form>
                    </Box>
                </Modal>

                {/* Add New Blog Modal */}
                <Modal
                    open={openAdd}
                    onClose={handleCloseAdd}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Add New Blog
                        </Typography>
                        <form onSubmit={handleAddSubmit}>
                            <TextField
                                fullWidth
                                required
                                label="Title"
                                name="title"
                                value={addFormData.title}
                                onChange={handleAddInputChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                required
                                label="Description"
                                name="description"
                                value={addFormData.description}
                                onChange={handleAddInputChange}
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </Container>
        </div>
    );
};

export default Home;
