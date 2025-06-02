 function gerarCurriculo() {
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const cidade = document.getElementById("cidade").value;
      const objetivo = document.getElementById("objetivo").value;
      const formacao = document.getElementById("formacao").value;
      const experiencia = document.getElementById("experiencia").value;
      const cursos = document.getElementById("cursos").value;
      const idiomas = document.getElementById("idiomas").value;

      const curriculo = `
        <div class="secao">
          <h2>${nome}</h2>
          <p>${email} | ${telefone} | ${cidade}</p>
        </div>
        <div class="secao">
          <h2>Objetivo</h2>
          <p>${objetivo}</p>
        </div>
        <div class="secao">
          <h2>Formação Acadêmica</h2>
          <p>${formacao}</p>
        </div>
        <div class="secao">
          <h2>Experiência Profissional</h2>
          <p>${experiencia}</p>
        </div>
        <div class="secao">
          <h2>Cursos Complementares</h2>
          <p>${cursos}</p>
        </div>
        <div class="secao">
          <h2>Idiomas</h2>
          <p>${idiomas}</p>
        </div>
      `;

      document.getElementById("curriculo").innerHTML = curriculo;
    }

