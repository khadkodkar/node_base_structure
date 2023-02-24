import NodeRSA from 'node-rsa';
export const tokenDecrypt = (token) => {
  const publicKey = new NodeRSA(process.env.PUBLIC_KEY);
  const decodedTokenRequest = JSON.parse(
    publicKey.decryptPublic(token, 'utf8')
  );
  return decodedTokenRequest;
};

export const tokenEncrypt = (payload) => {
  const privateKey = new NodeRSA(process.env.PRIVATE_KEY);
  const token = privateKey.encryptPrivate(payload, 'base64', 'utf8');
  return token;
};