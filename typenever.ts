let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, errorCode: number): never {
  throw {
    message: message,
    errorCode: errorCode,
  };
}

generateError('An error has occured', 500);
