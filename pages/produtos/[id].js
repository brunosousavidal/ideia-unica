//importar um hook de rotas para tratar as rotas
import {userRouter} from 'next/router';

function Produtos() {
  const router = userRouter();
  //captura o parametro fornecido no site.com/produtos/[id]
  const id = router.query.id;

  return <div>Id do produto: {id}</div> 
}

export default Produtos;