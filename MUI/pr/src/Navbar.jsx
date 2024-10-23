import { PhotoCamera } from '@mui/icons-material';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material'; // Reverted to Grid from @mui/material
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera sx={{ mr: 2 }} /> {/* Spacing between icon and text */}
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}> {/* Margin top and bottom */}
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, facere neque eveniet numquam natus ratione suscipit at sint, modi ipsa distinctio excepturi pariatur.
                        </Typography>

                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See My Photo
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div>
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            {/* Card 1 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            {/* Card 2 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            {/* Card 3 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            
                            {/* Card 4 */}
                            <Grid item xs={12} sm={5} md={4} lg={4}>
                                <Card elevation={15}>
                                    <CardMedia
                                        component="img"
                                        image="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="image title"
                                        height="200"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas iure quos aliquam sit pariatur. Quam, ipsam voluptas quasi autem ducimus consequuntur facilis.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            
                        </Grid>
                    </Container>
                </div>
            </main>
        </div>
    );
}

export default Navbar;
