import React from "react";
import Article from "./Article";
import "../styles/main.css";

const Main = () => {
	const titulo = ["Titulo 1", "Titulo 2", "Titulo 3"];
	const texto = ["Contenido 1", "Contenido 2", "Contenido 3"];
	return (
		<main className="main">
			<div className="Visibilidad">
				<h2>Encabezado de la pagina</h2>
				<br></br>
				<Article cabecera={titulo[0]} contenido={texto[0]} />
				<br></br>
				<Article cabecera={titulo[1]} contenido={texto[1]} />
				<br></br>
				<Article cabecera={titulo[2]} contenido={texto[2]} />
			</div>
		</main>
	);
};

export default Main;
