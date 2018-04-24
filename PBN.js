class Accounts {
  
    constructor(customerName, accountBalance, accountNumber) {
      this.customerName = customerName;
      this.accountBalance = accountBalance;
      this.accountNumber = accountNumber;
    }
    
    createAccount() {
      return `Name: ${this.customerName} Account Number: ${this.accountNumber} Account Balance: ${this.accountBalance}`
    
    }
    
    updateAccount(Amount, accountnumber) {
      
      let newBalance = 0;
      //check for account Number
      if (this.accountNumber) {
        newBalance = this.accountBalance + Amount;
        }
      return newBalance;
    }
    
    deleteAccount() {
      this.customerName = '';
      this.accountBalance = 0;
      this.accountNumber = '';
    }
  }
  
  const Customer = new Accounts('Ade', 50000, '12345');
  
  console.log(Customer.createAccount());
  console.log(Customer.updateAccount(5000, '12345'));
  