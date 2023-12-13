// Code your solutions in this file

const writeCards = (names) => {
  const messages = [];
  //   names.map((name) => {
  //     messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  //   });

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  console.log(messages);
  return messages;
};

const countDown = (number) => {
  while (number >= 0) {
    console.log(number);
    number -= 1;
  }
};
