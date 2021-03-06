async function tempo(request, response) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();
	
  //API de acesso ao newsletter do felipe para pegar a quantidade de acessos
  //https://api.convertkit.com/v3/subscribers?api_secret=ZJwLOhi01EvB90Clpsyw1e0fGRzPfw1Q
  const subscriberResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
  //recebe no formato de um json
  const subscriberResponseJson =await subscriberResponse.json();
  //pega somente o total de inscritos(como a chave é invalida vai retornar a message da api)
  //const inscritos = subscriberResponseJson.total_subscribers;
  const inscritos = subscriberResponseJson.message;
  
  //criando cache para não sobrecarregar de requisições o banco de dados ou a api
  //header do tipo controle do cache
  //valor = endpoint com cache no servidor da vercel de 10 segundos
  //stale-while-realidate - responder instantaneamente enquanto a vercel tenta autualizar a cache
  response.setHeader('Cache-Control', 's-maxage-10', 'stale-while-realidate');
  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  }) 
}

export default tempo;