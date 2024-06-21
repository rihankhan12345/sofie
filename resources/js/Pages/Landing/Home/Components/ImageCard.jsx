import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Experience from '@/Components/SVGIcons/Home/Experience';
import Group from '@/Components/SVGIcons/Home/Group';

export default function ImageCard({item}) {
    return (
        <Card sx={{
            maxWidth: "100%",
            '&.MuiPaper-root':{
                boxShadow: 'none',
            }
        }}>
            <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt="green iguana"
            />
            <CardContent sx={{pl:0}}>
                <Typography gutterBottom variant="subtitle1" component="div" color={'#000'}>
                    {item.name}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div" color={'#000'}>
                    {item.site}
                </Typography>
                <Box className="flex" gap={1}>
                    <Experience/>
                    <Typography variant="body2" color="text.secondary">
                            {item.experience}
                    </Typography>
                </Box>
                <Box className="flex" gap={1}>
                    <Group />
                    <Typography variant="body2" color="text.secondary">
                        {item.email}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
