// //importar um hook de rotas para tratar as rotas
// import { useRouter } from 'next/router';

// //pega a props do serverSide e tras para o componente nextjs
// function Produtos() {

//   const router = useRouter();
//   //captura o parametro fornecido no site.com/produtos/[id]
//   const id = router.query.id;

//   return <div>Id do produto: {id}</div> 
// }

// export default Produtos;
//____________________

// //funcao para pegar a props do lado do servidor
// export async function getServerSideProps(context) {
//   const id = context.query.id;

//   //injetar a props na função Produtos - unica coisa que irá para a pagina estatica que será criada no servidor
//   return {
//     props: {
//       id: id
//     }
//   }
// }

// function Produtos(props) {
//   return <div>Id do produto: {props.id}</div> 
// }

// export default Produtos;
//__________________________
// o getStaticPaths reserva em build os caminhos a serem acessados pela aplicação
// entretanto que vai continuar criando as paginas será o getStaticProps

// vamos fazer para duas rotas mas pode utilizar objetos de varios tamanhos para criar paginas infinitas
// exemplo: site.com/produtos/teclado-mecanico
export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1'
      }
    },{
      params: {
        id: '2'
      }
    }],
    //false - desabilita o fallback - qualquer parametro não especificado acima retornara 404 
    //true - habilita o fallback - aceita qualquer parametro no path do site(tentar gerar a pagina de forma assincrona)
    //blocking - assim como no getServerSideProps, vai bloquear a requisição ate que consiga gerar a pagina e retornar
    //uma vez gerada neste caso a pagina será replicada nos CDN's
    fallback: 'blocking' 
  }
}

export async function getStaticProps(context) {
  await delay(5000);
  const id = context.params.id;

  return {
    props: {
      id: id
    }
  }
}

function Produtos(props) {
  return <div>Id do produto: {props.id}</div> 
}

export default Produtos;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}