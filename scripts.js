document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('btnEmpresa');
  const container = document.getElementById('infoEmpresa');
  let visivel = false;

  botao.addEventListener('click', function () {
    if (visivel) {
      
      container.innerHTML = '';
      container.style.display = 'none';
      botao.textContent = 'Sobre a Invox';
      visivel = false;
    } else {
  
      container.innerHTML = '';
      container.style.display = 'block';
      botao.textContent = 'Fechar';
      visivel = true;

      const titulo = document.createElement('h2');
      titulo.textContent = ' Sobre a Invox';
      container.appendChild(titulo);

      const paragrafo1 = document.createElement('p');
      paragrafo1.textContent = 'A Invox é uma empresa dedicada ao desenvolvimento de software, com o objetivo de transformar desafios em soluções digitais eficientes, intuitivas e inovadoras. Nascemos da paixão por tecnologia e da vontade de impactar positivamente o dia a dia de pessoas e organizações por meio de sistemas inteligentes.';
      container.appendChild(paragrafo1);

      const paragrafo2 = document.createElement('p');
      paragrafo2.textContent = 'Na Invox, criamos softwares sob medida, aplicativos, plataformas web e ferramentas personalizadas que atendem às necessidades reais de nossos clientes. Utilizamos as mais recentes tecnologias e metodologias ágeis para garantir entregas rápidas, seguras e de alta qualidade.';
      container.appendChild(paragrafo2);

      const paragrafo3 = document.createElement('p');
      paragrafo3.textContent = 'Contamos com uma equipe multidisciplinar, criativa e comprometida, que trabalha lado a lado com cada cliente para entender seus objetivos e entregar muito mais do que apenas código: entregamos valor, eficiência e inovação.';
      container.appendChild(paragrafo3);

      const paragrafo4 = document.createElement('p');
      paragrafo4.textContent = 'Seja para otimizar processos, lançar um novo produto digital ou modernizar sua empresa, a Invox está pronta para desenvolver a solução ideal para você.';
      container.appendChild(paragrafo4);
    }
  });
});
