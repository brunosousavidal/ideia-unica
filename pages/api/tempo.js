async function tempo(request, response) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();
	
  //API de acesso ao newsletter do felipe para pegar a quantidade de acessos
  //https://api.convertkit.com/v3/subscribers?api_secret=ZJwLOhi01EvB90Clpsyw1e0fGRzPfw1Q
  const subscriberResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
  //recebe no formato de um json
  const subscriberResponseJson =await subscriberResponse.json();
  //pega somente o total de inscritos
  const inscritos = subscriberResponseJson.total_subscribers;
  
  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  }) 
}

export default tempo;