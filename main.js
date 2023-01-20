// cria uma referêncai para cada elemento
const formContent = document.querySelector('#formContent');
const budgetAndResultList = document.querySelector('#budgetAndResultList')
const separateItems = document.querySelector('#separateItems');
const balanceOfTheMonth = document.querySelector('#formBalanceOfTheMonth');
const budgetButton = document.querySelector('.budgetButton');
const finalResultField = document.querySelector('.budgetBoard')

let informTheBudgetList = ''; // string com a lista de orçamento
let initializeTheAccountCounter = 0;  // iniciar o contador
let accumulateAccountValues = 0;  // acumular o valores das contas

// cria um "ouvinte" de evento, quando acionado o submit
formContent.addEventListener('submit', (e) => {
    e.preventDefault();  // evita o envio do form

    // obter os dados de entrada
    const accountDescription = formContent.inDescription.value;
    const accountValue = Number(formContent.inValue.value);

    initializeTheAccountCounter++  // adiciona valores ao contador e acumulador
    accumulateAccountValues += accountValue;
    informTheBudgetList = `${informTheBudgetList} ${accountDescription} - R$ ${accountValue.toFixed(2)}\n`;

    separateItems.innerText = `${informTheBudgetList}--------------------------------------------------`
    budgetAndResultList.innerText = `${initializeTheAccountCounter} Conta(s) - Total R$ ${accumulateAccountValues.toFixed(2)}`
    formContent.inDescription.value = '';
    formContent.inValue.value = '';
    formContent.inDescription.focus();
})

balanceOfTheMonth.addEventListener('submit', (e) => {
    e.preventDefault();

    // obtém os valores de entrada do usuário
    const totalEarningsForTheMonth = Number(balanceOfTheMonth.monthlySalary.value);
    const totalExpensesForTheMonth = Number(balanceOfTheMonth.monthlyExpenses.value);
    let balanceSheetResult = totalEarningsForTheMonth - totalExpensesForTheMonth;
    
    if(balanceSheetResult > 0) {
        finalResultField.innerText = `Saldo do mês R$ ${balanceSheetResult.toFixed(2)}`
        finalResultField.style.background = '#0590eb';
    } else {
        finalResultField.innerText = `Saldo do mês R$ ${balanceSheetResult.toFixed(2)}`
        finalResultField.style.background = '#f00000';
    }

    balanceOfTheMonth.monthlySalary.value = '';
    balanceOfTheMonth.monthlyExpenses.value = '';
    balanceOfTheMonth.monthlySalary.focus();
})
