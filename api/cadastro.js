import supabase from '../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Método não permitido');
  const { usuario, senha, nome } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ usuario: usuario.toLowerCase(), senha, nome }]);

  if (error) return res.status(400).json({ error: 'Usuário já existe ou erro no cadastro.' });

  return res.redirect(302, '/');
}