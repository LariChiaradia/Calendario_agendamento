document.addEventListener("DOMContentLoaded", function () {
  const Meses = [
    "janeiro",
    "feveiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const tableDays = document.getElementById("dias");
  function GetDaysCalendar(mes, ano) {
    document.getElementById("mes").innerHTML = Meses[mes];
    document.getElementById("ano").innerHTML = ano;

    let firstDayOfWeek = new Date(ano, mes, 1).getDay() - 1;
    let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();

    for (
      var i = -firstDayOfWeek, index = 0;
      i < 42 - firstDayOfWeek;
      i++, index++
    ) {
      let dt = new Date(ano, mes, i);
      let dayTable = tableDays.getElementsByTagName("td")[index];
      dayTable.innerHTML = dt.getDate();

      if (i < 1) {
        dayTable.classList.add("mes-anterior");
      }
      if (i > getLastDayThisMonth) {
        dayTable.classList.add("proximo-mes");
      }
    }
  }

  let now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();
  GetDaysCalendar(month, year);

  const botao_anterior = document.getElementById("btn_ant");
  const botao_proximo = document.getElementById("btn-next");

  botao_proximo.onclick = function () {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    GetDaysCalendar(month, year);
  };

  botao_anterior.onclick = function () {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    GetDaysCalendar(month, year);
  };
});

// document.addEventListener('DOMContentLoaded',function(){
//     const monthsBR = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
//     const tableDays = document.getElementById('dias');
//     function GetDaysCalendar(mes,ano){
//         document.getElementById('mes').innerHTML = monthsBR[mes];
//         document.getElementById('ano').innerHTML = ano;

//         let firstDayOfweek = new Date(ano,mes,1).getDay()-1;
//         let getLastDayThisMonth = new Date(ano,mes+1,0).getDate();

//         for(var i = -firstDayOfweek,index = 0; i < (42-firstDayOfweek); i++,index++){
//             let dt = new Date(ano,mes,i);
//             let dtNow = new Date();
//             let dayTable = tableDays.getElementsByTagName('td')[index];
//             dayTable.classList.remove('mes-anterior');
//             dayTable.classList.remove('proximo-mes');
//             dayTable.classList.remove('dia-atual');
//             dayTable.innerHTML = dt.getDate();

//             if(dt.getFullYear() && dt.getMonth() == dtNow.getMonth && dt.getDate() == dtNow.getDate()){
//                 dayTable.classList.add('dia-atual')
//             }
//             if(i < 1){
//                 dayTable.classList.add('mes-anterior')
//             }
//             if(i > getLastDayThisMonth){
//                 dayTable.classList.add('proximo-mes')
//             }
//         }
//     }
//     let now = new Date();
//     let mes = now.getMonth();
//     let ano = now.getFullYear()
//     GetDaysCalendar(mes,ano);

//     const botao_proximo = document.getElementyById('btn_prev');
//     const botao_anterior = document.getElementyById('btn_ant');

//     botao_proximo.onclick = function(){
//         mes++;
//         // if (mes > 11){
//         //     mes = 0;
//         //     ano++;

//         // }
//         GetDaysCalendar(mes, ano);
//     }
//     botao_anterior.onclick = function(){
//         mes--;
//         // if (mes < 0){
//         //     mes = 11;
//         //     ano--;
//         // }
//         GetDaysCalendar(mes, ano);
//     }
// })
