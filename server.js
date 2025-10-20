import express from "express";
import dotenv from "dotenv";
import petsRoutes from './src/routes/petRoute.js'

// Criar aplicação com Express e configurar para aceitar JSON
const app = express();
app.use(express.json());

// Carregar variáveis de ambiente e definir constante para porta do servidor
dotenv.config();
const serverPort = process.env.PORT || 3001;

// Rota principal GET para "/"
app.get("/", (req, res) => {
  res.json({ message: "🐶 API dos Pets funcionando!" });
});

// Aqui vão suas rotas 
app.use('/pets', petsRoutes);

// Iniciar servidor escutando na porta definida
app.listen(serverPort, () => {
  console.log(`🐕 Servidor rodando em http://localhost:${serverPort} 🐶`);
});

