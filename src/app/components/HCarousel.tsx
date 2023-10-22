"use client"
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


export default function HCarousel()
{
   
    var items = [
        {
            name: "dream job",
            description: "find your dream job",
            imgurl:"/images.jpeg"
        },
        {
            name: "jobs for the secure future",
            description: "job description !",
            imgurl:"/job2.jpg"
        },{
            name: "welcome for the new intern ",
            description: "internship",
            imgurl:"/job3.jpg"
        },
        {
            name: "welcome to the corporate world",
            description: "intern",
            imgurl:"/favicon.ico"
        },
    ]

    return (
        <Carousel className='flex flex-wrap z-0'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props: { item: {
  imgurl: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; 
}; })
{
    return (
        <Paper className='flex flex-col justify-center items-center h-auto p-1 m-6  rounded-3xl bg-transparent'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={props.item.imgurl} alt=""  className='w-full h-[350px]  rounded-xl '/>
            <h2 className='text-white'>{props.item.name}</h2>
            <p className='text-white'>{props.item.description}</p>
            <br />
        </Paper>
    )
}
