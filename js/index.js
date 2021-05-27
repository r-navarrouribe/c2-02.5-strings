function esItaliano(apellido) {
  const ultimaLetra = apellido.slice(-1);
  return ultimaLetra === "i";
}

function imprimeRespuesta(apellido) {
  if (esItaliano(apellido)) {
    console.log("Este apellido tiene muchas probabilidades de ser italiano");
  } else {
    console.log("Este apellido podría ser de cualquier país");
  }
}

const apellido1 = "Berlusconi";

const apellido2 = "Bellmunt";

imprimeRespuesta(apellido1);

imprimeRespuesta(apellido2);
