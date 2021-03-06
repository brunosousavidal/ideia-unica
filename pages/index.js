import { useState } from "react";
//biblioteca para não precisar reconstruir toda a tela
import Link from "next/link";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Contador />
      
      {/* conecta as paginas de forma especial no servidor vercel */}
			<Link href="/sobre">
				<a>Acessar página Sobre</a>
			</Link>
		</div>
	);
}

function Contador() {
	const [contador, setContador] = useState(1);

	function adicionarContador() {
		setContador(contador + 1);
	}

	return (
		<div>
			<div>{contador}</div>
			<button onClick={adicionarContador}>Adicionar</button>
		</div>
	);
}

export default Home;
