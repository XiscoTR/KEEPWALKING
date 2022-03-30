let validar = function()
{
	let personaOK = /^[A-Z][a-z]+( [A-Z][a-z]+){1,3}$/;
	let resultatPersona = false;
	let persona = document.querySelector("input[id='id_nom']");
	let errorPersona = document.querySelector("label[for='id_nom']");
	if (persona.value.length == 0)
	{
		errorPersona.innerHTML = "Nombre i Apellidos Obligatorio";
		errorPersona.style.color = "red"
	}
	else
	{
		if (personaOK.test(persona.value))
		{
			errorPersona.innerHTML = "Nombre i Apellidos";
			errorPersona.style.color = "white"
			resultatPersona = true;
		}
		else
		{
			errorPersona.innerHTML = "Nombre i Apellidos Incorrecto";
			errorPersona.style.color = "#ff8000"
		}
	}

	let correuOK = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let resultatCorreu = false;
	let correu = document.querySelector("input[id='id_email']");
	let errorCorreu = document.querySelector("label[for='id_email']");

	if (correu.value.length == 0)
	{
		errorCorreu.innerHTML = "Correo electrònico Obligatorio";
		errorCorreu.style.color = "red"
	}
	else
	{
		if (correuOK.test(correu.value))
		{
			errorCorreu.innerHTML = "Correo electrònico";
			errorCorreu.style.color = "white"
			resultatCorreu = true;
		}
		else
		{
			errorCorreu.innerHTML = "Correo electrònico Incorrecto";
			errorCorreu.style.color = "#ff8000"
		}
	}
	return resultatPersona && resultatCorreu;
}
