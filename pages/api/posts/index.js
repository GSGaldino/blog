import connection from '../../../database';
import upload from '../../../utils/upload';

export default async (req, res) => {
  if(req.method === "POST"){
    const created_at = new Date().getTime();
    const {url, title, content, author} = req.body;
    const path = (await upload(url)).secure_url;

    const [inserted] = await connection('posts').insert({
      path,
      title,
      content,
      created_at,
      author
    })
    if(inserted){
      return res.json({
        message: `success inserted post number ${inserted}.`
      })
    }
  }else if(req.method === "GET"){
    const posts = await connection('posts').select('*');
    return res.json(posts);
  }
}
