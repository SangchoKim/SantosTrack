class Command {
    constructor(operation) {
        this.operation = operation;
    }

    execute() {
        this.operation.execute();
    }
}

class ProcessCreditCardPayment {
    execute() {
        console.log("CreditCard");
    }
}

class ProcessPayPalPayment {
    execute() {
        console.log("PayPal");
    }
}

class ProcessStripePayment {
    execute() {
        console.log("Stripe");
    }
}

function CreditCardCommand() {
    return new Command(new ProcessCreditCardPayment());
}

function PayPalCommand() {
    return new Command(new ProcessPayPalPayment());
}

function StripeCommand() {
    return new Command(new ProcessStripePayment());
}

class PaymentSystem {
    constructor() {
        this.paymentCommand = "";
    }

    setPaymentCommand(command) {
        this.paymentCommand = command;
    }
    executeCommand() {
        this.paymentCommand.execute();
    }
}

function run() {
    let paymentSystem = new PaymentSystem();
    paymentSystem.setPaymentCommand(new CreditCardCommand());
    paymentSystem.executeCommand();
    paymentSystem.setPaymentCommand(new PayPalCommand());
    paymentSystem.executeCommand();
    paymentSystem.setPaymentCommand(new StripeCommand());
    paymentSystem.executeCommand();
}

run();
