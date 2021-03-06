//biblioteca para não precisar reconstruir toda a tela
import Link from "next/link";

function Sobre() {
	return (
		<div>
			<h1>Sobre</h1>
      
      {/* conecta as paginas de forma especial no servidor vercel */}
			<Link href="/">
				<a>Acessar página Home</a>
			</Link>
		</div>
	);
}

export default Sobre;
