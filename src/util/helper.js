

export function formatQuestion(question, user){
  const { optionOne, optionTwo, id, author } = question 
  return{
    id,
    optionOne,
    optionTwo, 
    author,
  }
}