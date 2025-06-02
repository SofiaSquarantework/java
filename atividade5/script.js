function gerarCurriculo() {
      // Pega os valores de todos os campos
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const cidade = document.getElementById("cidade").value;
      const objetivo = document.getElementById("objetivo").value;
      const formacao = document.getElementById("formacao").value;
      const experiencia = document.getElementById("experiencia").value;
      const cursos = document.getElementById("cursos").value;
      const idiomas = document.getElementById("idiomas").value;

      // Adiciona imagem somente se ela estiver presente
      let imagemHTML = fotoBase64
        ? `<img src="${fotoBase64}" style="width:150px;height:150px;border-radius:10px;margin-bottom:15px;">`
        : "";

      // Monta o HTML do currículo
      const curriculo = `
        <div class="secao">
          ${imagemHTML}
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

      // Exibe o currículo gerado na tela
      document.getElementById("curriculo").innerHTML = curriculo;
    }

    // Limpa todos os campos e o currículo gerado
    function novoCurriculo() {
      document.getElementById("formulario").reset(); // Limpa formulário
      document.getElementById("curriculo").innerHTML = ""; // Limpa currículo na tela
      document.getElementById("foto-preview").src = ""; // Remove imagem
      fotoBase64 = ""; // Reseta variável da imagem
    }

    // Gera o PDF do currículo
    async function gerarPDF() {
      const { jsPDF } = window.jspdf; // Acessa o construtor jsPDF
      const doc = new jsPDF(); // Cria novo PDF
      let y = 10; // Posição vertical inicial

      // Se houver imagem, adiciona no canto superior direito
      if (fotoBase64) {
        doc.addImage(fotoBase64, "JPEG", 150, 10, 40, 40);
      }

      // Função auxiliar para adicionar seções com texto formatado
      function addSecao(titulo, texto) {
        const splitText = doc.splitTextToSize(texto || "Não informado", 180);
        doc.setFontSize(14);
        doc.text(titulo, 10, y);
        y += 8;
        doc.setFontSize(12);
        doc.text(splitText, 10, y);
        y += splitText.length * 7 + 5;
      }

      // Adiciona os dados no PDF
      addSecao("Nome:", document.getElementById("nome").value);
      addSecao("E-mail:", document.getElementById("email").value);
      addSecao("Telefone:", document.getElementById("telefone").value);
      addSecao("Cidade/Estado:", document.getElementById("cidade").value);
      addSecao("Objetivo:", document.getElementById("objetivo").value);
      addSecao("Formação Acadêmica:", document.getElementById("formacao").value);
      addSecao("Experiência Profissional:", document.getElementById("experiencia").value);
      addSecao("Cursos Complementares:", document.getElementById("cursos").value);
      addSecao("Idiomas:", document.getElementById("idiomas").value);

      // Salva o arquivo como PDF
      doc.save("curriculo.pdf");
    }