import supabase from '../lib/db.js';
import cookie from 'cookie';

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const usuario = cookies.usuario;
  if (!usuario) return res.status(403).json({ error: 'Não logado' });

  const { data: users } = await supabase.from('users').select().eq('usuario', usuario);
  if (!users || users.length === 0) return res.status(403).json({ error: 'Usuário inválido' });
  const user = users[0];

  const { data: sinais } = await supabase
    .from('signals')
    .select()
    .eq('user_id', user.id)
    .order('id', { ascending: false });

  return res.json(sinais || []);
}