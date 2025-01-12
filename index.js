const { Connection, PublicKey } = require('@solana/web3.js');
const { Metaplex } = require('@metaplex-foundation/js');

const TOKEN_MINT_ADDRESS = 'FTUdBsikn5EyhKnWcsfxwg5nubqgdcQHuvh5uMNLpump';

(async () => {
  try {
    // Criar conexão com a Solana
    const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
    
    // Inicializar Metaplex
    const metaplex = new Metaplex(connection);
    
    // Criar PublicKey do token
    const mintPublicKey = new PublicKey(TOKEN_MINT_ADDRESS);

    // Buscar metadata
    const nft = await metaplex.nfts().findByMint({ mintAddress: mintPublicKey });
    
    // Exibir a metadata
    console.log('Metadata do Token:', nft);
  } catch (error) {
    console.error('Erro ao obter metadata:', error);
  }
})();
