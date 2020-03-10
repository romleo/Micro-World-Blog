import React, {Fragment}from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Header from './Header';
import blogpost from '../data/blog-post';
import {Conteiner , Box ,Typography} from '@material-ui/core';
import Footer from ' ./Footer';


const NextPost =({href, position,title }) =>(
  <Link href={href}>
    {position}{''}
    <Typography variant = "h6" component="h6">
      {title}  
    </Typography>  
  </Link>  
) ;


const BlogPost = ({meta, cgildren})=>{
  const current = blogposts.map(({ title }) => title).indexOf(meta.title);
  const next = blogpost[curent -1];
  const prev = blogpost [curent+1];
  
  return(
   <Fragment>
     <Header/>
     <Conteiner maxWidth="md">
       <Box my={4}>
         <Link href ="/">{'<'}BACK TO BLOG</Link>  
       </Box>
       <Typography variant ="h4" component="h1" gutterBottom>
         {meta.title}  
       </Typography> 
        {children} 
        <hr/>
        <Box my={4} displey="flex" juustifyContent="centr">
          <Box mx={4}>
            {prew &&(
              <NextPost
                href={prev.path}
                position="< Previous post"
                title= {prew.title}
              />  
            )}  
          </Box>  
          <Box mx={4}>
            {next &&(
             <NextPost
               href={next.path}
               position="Next post >"
               title={next.title}
             />   
            )}   
          </Box>
        </Box>
      </Conteiner> 
      <Footer title= "Micro World Blog" description="Try with me"/>
   </Fragment>   
  ); 
};

export default BlogPost;
