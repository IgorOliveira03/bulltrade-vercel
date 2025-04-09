import supabase from '../lib/db.js';
import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Método não permitido');

  const { usuario, senha } = req.body;

  const { data: users } = await supabase
    .from('users')
    .select()
    .eq('usuario', usuario.toLowerCase())
    .eq('senha', senha);

  if (!users || users.length === 0) return res.redirect('/?erro=1');

  const user = users[0];

  res.setHeader('Set-Cookie', cookie.serialize('usuario', user.usuario, {
    path: '/',
    maxAge: 60 * 60 * 24,
    httpOnly: true
  }));
  res.redirect(302, '/home');
}