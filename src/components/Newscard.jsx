import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Newsbody from './Newsbody.jsx';
import {formatDate} from '../Utils.js'

export default function Newscard({ content }) {
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={content.image}
        title={content.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {content.title.substring(0, 60) + "...."}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content.description.substring(0, 50) + "...."}
        </Typography>
        <Typography variant='body2' sx={{ mt: 1, color: 'text.secondary' }}>
          {formatDate(content.publishedAt)}
        </Typography>
      </CardContent>
      <CardActions>
        <Newsbody 
          open={open} 
          handleClickOpen={handleClickOpen} 
          handleClose={handleClose}
          content={content}
        />
      </CardActions>
    </Card>
  );
}
