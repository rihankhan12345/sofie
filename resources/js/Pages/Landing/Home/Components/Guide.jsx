import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import theme from '@/Themes/Color';

export default function Guide({item}) {
    return (
        <Card sx={{
            bgcolor: theme.color[import.meta.env.VITE_SELECTED_THEME].primary,
            '&.MuiPaper-root':{
                boxShadow: 'none',
            }
        }}>
            <CardContent sx={{pl:0}} textAlign={'center'}>
                <Typography textAlign={'center'} fontWeight={'bold'} gutterBottom variant="h2" component="div" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
                    {item.counter}
                </Typography>
                <Typography textAlign={'center'} gutterBottom variant="subtitle2" component="div" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
                    {item.title}
                </Typography>
                <Typography textAlign={'center'} variant="body2" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
                        {item.caption}
                </Typography>
            </CardContent>
        </Card>
    );
}
