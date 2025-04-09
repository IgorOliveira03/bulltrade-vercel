import cookie from 'cookie';

export default async function handler(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize('usuario', '', {
    path: '/',
    maxAge: 0,
    httpOnly: true
  }));
  res.redirect('/');
}