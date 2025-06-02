 document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;
      const email = document.getElementById('email').value;

      document.getElementById('res-nome').textContent = nome;
      document.getElementById('res-idade').textContent = idade;
      document.getElementById('res-email').textContent = email;

      document.getElementById('resultado').style.display = 'block';
    });

    async function gerarPDF() {
      const { jsPDF } = window.jspdf;
      
      const doc = new jsPDF();

      const nome = document.getElementById('res-nome').textContent;
      const idade = document.getElementById('res-idade').textContent;
      const email = document.getElementById('res-email').textContent;

      doc.text("Cadastro do Aluno", 10, 10);
      doc.text(`Nome: ${nome}`, 10, 20);
      doc.text(`Idade: ${idade}`, 10, 30);
      doc.text(`Email: ${email}`, 10, 40);

      doc.save("cadastro.pdf");
    }