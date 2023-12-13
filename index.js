// Code your solutions in this file

const writeCards = (names) => {
  const messages = [];
  names.map((name) => {
    messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  });
  console.log(messages);
  return messages;
};

const countDown = (number) => {
  while (number >= 0) {
    console.log(number);
    number -= 1;
  }
};
