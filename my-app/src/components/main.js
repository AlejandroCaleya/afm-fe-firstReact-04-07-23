import React from "react";
import "../styles/main.css";

const Main = () => {
	var btn = document.getElementsByClassName("btnElegant");
	btn.addEventListener("click", function () {
		var vis = document.getElementsByClassName("Visibilidad");

		if (vis.style.display == "block") {
			vis.style.display = "none";
		}
	});

	return (
		<div className="main">
			<button className="btnElegant">Show/Hide</button>
			<div className="Visibilidad">
				<h3>Encabezado de la pagina</h3>
				<br></br>
				<ul>
					<li>Hola</li>
					<li>Hola</li>
					<li>Hola</li>
				</ul>
			</div>
		</div>
	);
};

export default Main;
