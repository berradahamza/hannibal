const express = require('express');
const path = require('path');
const app = express();

// Dossier des fichiers statiques (ton HTML, CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale : retourne ton index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lance le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
