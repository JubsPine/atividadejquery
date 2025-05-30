$(document).ready(function () {
  $('#calcularSalario').click(function (e) {
    e.preventDefault();

    // valores
    const nome = $('#nome').val();
    const idade = parseInt($('#idade').val());
    const salarioBruto = parseFloat($('#salario').val());
    const dependentes = parseInt($('#dependentes').val());

    // verificação de campos
    if (!nome || isNaN(idade) || isNaN(salarioBruto) || isNaN(dependentes)) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    // bônus de acordo com a idade
    const bonus = idade > 50 ? 300 : 200;

    // descontos
    const inss = salarioBruto * 0.08;
    const valeTransporte = salarioBruto * 0.05;

    // acréscimo por dependente  
    const adicional = dependentes * 50;

    // cálculo do salário líquido
    const salarioLiquido = salarioBruto - inss - valeTransporte + bonus + adicional;

    // print do resultado
    alert(
      `Nome: ${nome}\n` +
      `Número de Dependentes: ${dependentes}\n` +
      `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
      `INSS (8%): R$ ${inss.toFixed(2)}\n` +
      `Vale Transporte (5%): R$ ${valeTransporte.toFixed(2)}\n` +
      `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`
    );
  });
});
