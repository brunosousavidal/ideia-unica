function Tempo(props) {
  console.log("> Passando pelo FrontEnd;");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      {/* <div>{props.staticDateString} (estático com delay)</div> */}
      <div>{props.staticDateString} (estático)</div>
    </div>
	);
}

export async function getStaticProps() {
  console.log("> Passando pelo getStaticProps();");
//  console.log("> Adicionando delay de 5 segundos;");

//  await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();
  return {
    props: {
      staticDateString
    },
    revalidate: 1 //revalida a parte estatica a cada segundo    
  }
}
//simulando um delay bem ruim na hora do build
//const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export default Tempo;