import "./styles/Item.css";

const Item = () => {
  let itemArray = [
    {
      id: 1,
      description: "Вопрос 1",

      option1: "Первый вариант",
      option2: "Второй вариант",
      option3: "Третий вариант",
      option4: "Четвёртый вариант",

      correct: "Третий вариант",
    },
    {
      id: 2,
      description: "Вопрос 2",

      option1: "Первый вариант",
      option2: "Второй вариант",
      option3: "Третий вариант",
      option4: "Четвёртый вариант",

      correct: "Первый вариант",
    },
    {
      id: 3,
      description: "Вопрос 3",

      option1: "Первый вариант",
      option2: "Второй вариант",
      option3: "Третий вариант",
      option4: "Четвёртый вариант",

      correct: "Второй вариант",
    },
    {
      id: 4,
      description: "Вопрос 4",

      option1: "Первый вариант",
      option2: "Второй вариант",
      option3: "Третий вариант",
      option4: "Четвёртый вариант",

      correct: "Четвёртый вариант",
    },
    {
      id: 5,
      description: "Вопрос 5",

      option1: "Первый вариант",
      option2: "Второй вариант",
      option3: "Третий вариант",
      option4: "Четвёртый вариант",

      correct: "Второй вариант",
    },
  ];

  let pageContent = itemArray.map((item) => {
    return (
      <div>
        <h3>{item.description}</h3>

        <div className="options">
          <div>
            <input id={`${`option-1-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
            <label for={`${`option-1-${item.id}`}`}>{item.option1}</label>
          </div>

          <div>
            <input id={`${`option-2-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
            <label for={`${`option-2-${item.id}`}`}>{item.option2}</label>
          </div>

          <div>
            <input id={`${`option-3-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
            <label for={`${`option-3-${item.id}`}`}>{item.option3}</label>
          </div>

          <div>
            <input id={`${`option-4-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
            <label for={`${`option-4-${item.id}`}`}>{item.option4}</label>
          </div>
        </div>
      </div>
    );
  });

  return pageContent;
};

export default Item;
