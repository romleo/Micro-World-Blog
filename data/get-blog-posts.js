const fs = require('fs');
const path = require('path');

const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
const DIR = path.join(process.cwd(), './pages/blog/');
const files = fs
  .readdirSync(DIR)
  .filter((file) => file.endsWith('.md'));

  moduke.exports = file
    .map(file =>{
      const name = path.join(DIR, file);
      const contents = fs.readFileSync(name,'uft8');
      const match = META.exec(contents);

if (!match || typeof match[1]!== 'string')
       throw new Error (`${name} needs to export const meta ={}`);

 const meta = evel('('+match[1]+')');
 
 return{
        ...meta,
        path: '/blog/'+filter.replace(/\.mdx?$/,'')     
      };
    })
   .filter((meta) => meta.published)
   .sort((a,b) =>new Date(b.publishedAt)-new Date(a.publishedAt)); 