import connection from '../../../database';

export default async (req, res) => {
  if(req.method === "POST"){
    const created_at = new Date().getTime();
    const {username, password} = req.body;

    const [inserted] = await connection('users').insert({
      username,
      password,
      created_at
    });
    
    return res.json(inserted);
  }
  const users = await connection('users').select('*');

  res.json(users)
}
