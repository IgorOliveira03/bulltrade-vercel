export default function handler(req, res) {
    const frases = [
      "Alta no BTC pode indicar novo suporte",
      "ETH subiu 18% hoje",
      "ADA mostra padrão de reversão",
      "DOT com entrada leve",
      "AI sugere observação em SOL"
    ];
    res.json({ mensagem: frases[Math.floor(Math.random() * frases.length)] });
  }