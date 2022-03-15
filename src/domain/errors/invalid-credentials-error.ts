export class InvalidCredentialsError extends Error {
  constructor() {
    super("Credenciais Invalidas");
    this.name = "InvalidCredentialsError";
  }
}

export class UnexpectedError extends Error {
  constructor() {
    super("Algo de errado aconteceu. Tente novamente em breve.");
    this.name = "UnexpectedError";
  }
}


