function tempo(request, response) {
  const dynamicDate = new Date();
	
  //API de acesso ao newsletter do felipe para pegar a quantidade de acessos
  const subscriberResponse = await fetch("https://api.convertkit.com/v3/subscribers?api_secret=ZJwLOhi01EvB90Clpsyw1e0fGRzPfw1Q");
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