let segundosValor = prompt("Ingrese los segundos");
const horas = segundosValor / 3600;
const minutos = (segundosValor / 60) % 60;
const segundos = segundosValor % 60;
alert(`${segundosValor} = ${horas} horas, ${minutos} minutos, ${segundos} segundos`)