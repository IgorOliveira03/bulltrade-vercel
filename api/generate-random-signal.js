import supabase from '../lib/db.js';
import cookie from 'cookie';

const assets = ["EUR/USD", "USD/BRL", "BTC/USD", "ETH/USD", "SOL/USD"];
const directions = ["COMPRA", "VENDA"];
const durations = ["M1"];

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const usuario = cookies.usuario;
  if (!usuario) return res.status(403).json({ error: 'Usuário não autenticado.' });

  const { data: users } = await supabase.from('users').select().eq('usuario', usuario);
  if (!users || users.length === 0) return res.status(403).json({ error: 'Usuário inválido' });
  const user = users[0];

  const signal = {
    asset: assets[Math.floor(Math.random() * assets.length)],
    direction: directions[Math.floor(Math.random() * directions.length)],
    duration: durations[0],
    time_sent: new Date(Date.now() + 60000).toLocaleTimeString('pt-BR')
  };

  await supabase.from('signals').insert({
    user_id: user.id,
    ...signal
  });

  return res.json(signal);
}