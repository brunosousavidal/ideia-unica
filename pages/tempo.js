function Tempo(props) {
  console.log("> Passando pelo FrontEnd;");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
	);
}

export async function getStaticProps() {
  console.log("> Passando pelo getStaticProps();");

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();
  return {
    props: {
      staticDateString
    },
    revalidate: 1 //revalida a parte estatica a cada segundo
  }
}

export default Tempo;