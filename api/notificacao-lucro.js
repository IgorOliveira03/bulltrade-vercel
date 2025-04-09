export default function handler(req, res) {
    const nomes = ["Lucas", "Juliana", "Felipe", "Ana", "Igor"];
    const nome = nomes[Math.floor(Math.random() * nomes.length)].toUpperCase();
    const valor = Math.floor(Math.random() * 700 + 200);
    res.json({ nome, lucro: valor });
  }