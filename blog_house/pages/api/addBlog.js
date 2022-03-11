import fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
      let body = req.body;
      let date = new Date()
      let reg = / /g;
      let slug = (body.title).replace(reg,"-")
      let temp = slug
      for (let i of temp){
        if(i=="?"){
          slug = slug.replace(i,"");
        }else if(i=="." || i=="/"){
          slug = slug.replace(i,"")
        }
      }
      let data = fs.readFileSync('./pages/api/allBlogs.json','utf-8');
      data = JSON.parse(data)
      date = date.toDateString()
      body.date = date
      body.slug = slug
      body.key = data.length+1;
      console.log(body)
      data.push(body)
      fs.writeFileSync('./pages/api/allBlogs.json',JSON.stringify(data))
      res.end()
    } else {
      // Handle any other HTTP method
      res.status(500).json({data:"Its a post request"})
    }
  }
  