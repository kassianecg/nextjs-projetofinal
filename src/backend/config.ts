import firebase from "firebase";
import "firebase/firestore";

// Arquivo de configuração do firebase, para fazer a conexão
// Firebase é o DB do google. Ele né Não relacional (chave: valor)

if (!firebase.apps.length) {
  // process.env.NOME_DA_VARIAVEL servem para acessar as variaveis de ambiente
  // encontradas no arquivo .env
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default firebase;
