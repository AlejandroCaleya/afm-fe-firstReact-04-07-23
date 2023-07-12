import React from "react";
import "../styles/main.css";
import Boton from "./Boton";

const Article = (props) => {
	return (
		<article>
			<h4>{props.cabecera}</h4>
			<p>{props.contenido}</p>
			<Boton />
		</article>
	);
};

export default Article;
