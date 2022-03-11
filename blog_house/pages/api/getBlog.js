import data from './allBlogs.json'

// http://localhost:3000/api/getBlog
export default function handler(req, res) {
    let {query} = req.query;
    for (let i of data){
        if ((i.slug).toLowerCase().trim()==(query).toLowerCase().trim()){
            res.status(200).json(i);
        }
    }
    res.status(404).send("Not Found");
  }