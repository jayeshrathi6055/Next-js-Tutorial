import data from './allBlogs.json'

// http://localhost:3000/api/allBlogs
export default function handler(req, res) {
    res.status(200).json(data);
  }