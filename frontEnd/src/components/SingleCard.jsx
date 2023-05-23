import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({
  title,
  description,
  type,
  duration,
  date,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <span style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Typography gutterBottom variant="h4" component="h4"  >
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="p" >
            {duration}
          </Typography>
        </span>
        <Typography gutterBottom variant="body1" component="p" sx={{color:"#50A060", fontWeight:"bold" }}>
          Exercise Type : {type}
        </Typography>
        <Typography  variant="body2" color="text.secondary" sx={{textAlign: 'justify' }}>
          {description}
        </Typography>
        <Typography gutterBottom sx={{padding:'10px 0px'}} variant="body2" component="div">
          {date}
        </Typography>
      </CardContent>
      <CardActions >
        <Button variant="outlined" sx={{color:'#50A060', borderColor:'#50A060', padding:"5px 40px"}} size="small">EDIT</Button>
        <Button variant="contained" sx={{color:'#50A060', backgroundColor:'#edf5ef',borderColor:'#50A060', padding:"5px 40px"}} size="small">DELETE</Button>
      </CardActions>
    </Card>
  );
}
