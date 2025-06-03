function gerarCurriculo() {
      // Captura os valores dos campos
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const cidade = document.getElementById("cidade").value;
      const objetivo = document.getElementById("objetivo").value;
      const formacao = document.getElementById("formacao").value;
      const experiencia = document.getElementById("experiencia").value;
      const cursos = document.getElementById("cursos").value;
      const idiomas = document.getElementById("idiomas").value;

      // Monta a imagem se existir
      let imagemHTML = fotoBase64 ? `<img src="${fotoBase64}" style="width:150px;height:150px;border-radius:10px;margin-bottom:15px;">` : "";

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

      // Exibe no elemento da página
      document.getElementById("curriculo").innerHTML = curriculo;
    }

    // Limpa o formulário e a visualização
    function novoCurriculo() {
      document.getElementById("formulario").reset();
      document.getElementById("curriculo").innerHTML = "";
      document.getElementById("foto-preview").src = "";
      fotoBase64 = "";
    }

    // Gera um PDF com jsPDF
    async function gerarPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF(); // Cria novo PDF
      let y = 20; // Posição vertical inicial

      // Cabeçalho do currículo
      doc.setFillColor(0, 76, 153);
      doc.rect(10, 10, 190, 15, "F");
      doc.setFontSize(16);
      doc.setTextColor(255, 255, 255);
      doc.text("Currículo", 105, 20, { align: "center" });

      // Adiciona imagem se houver
      if (fotoBase64) {
        doc.addImage(fotoBase64, "JPEG", 160, 25, 35, 35);
      }

      y = 40;

      // Dados pessoais
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const cidade = document.getElementById("cidade").value;

      doc.setFontSize(13);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "bold");
      doc.text(nome, 15, y);

      y += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(`${email} | ${telefone} | ${cidade}`, 15, y);

      y += 15;

      // Função auxiliar para adicionar seções formatadas
      function addSecao(titulo, texto) {
        if (!texto.trim()) return; // Ignora se estiver vazio

        if (y > 260) {
          doc.addPage(); // Adiciona nova página se estiver no final
          y = 20;
        }

        // Título da seção
        doc.setFillColor(0, 123, 255);
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.rect(10, y, 190, 8, "F");
        doc.text(titulo, 15, y + 6);
        y += 12;

        // Texto da seção
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        const split = doc.splitTextToSize(texto, 180); // Quebra em linhas
        doc.text(split, 15, y);
        y += split.length * 6 + 5;
      }

      // Adiciona cada seção
      addSecao("Objetivo", document.getElementById("objetivo").value);
      addSecao("Formação Acadêmica", document.getElementById("formacao").value);
      addSecao("Experiência Profissional", document.getElementById("experiencia").value);
      addSecao("Cursos Complementares", document.getElementById("cursos").value);
      addSecao("Idiomas", document.getElementById("idiomas").value);

      // Salva o arquivo PDF
      doc.save("curriculo.pdf");
    }