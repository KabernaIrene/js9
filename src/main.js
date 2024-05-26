//Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, 
//що містить тільки ті числа, які є простими числами.


const numb = prompt('Write a numbers, please');

console.log(numb)

function primeNumbes (a){
    const numbArr = a.split(' ')
    console.log(numbArr)
    const primeNumb = numbArr.filter(number => {  for (let i = 2; number > i; i++) {
        if (number % i == 0) {
          return false;
        }
        }
        return number > 1;})

        console.log(primeNumb)
        
}

primeNumbes(numb)



//Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, 
//де кожен об'єкт описує сповіщення та має поля source / text / date. 
//Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, 
//а значенням - масив сповіщень із цього джерела.

const arrObj = [
    {sourse: 'Anya', text: 'Hello!!!', date: '01/01/2024'},
    {sourse: 'Danya', text: 'We are here', date: '20/01/2024'},
    {sourse: 'Sanya', text: 'Who is the best of the best?', date: '01/10/2024'},
    {sourse: 'Luna', text: 'First', date: '01/12/2024'},
    {sourse: 'Sanya', text: 'I did it!', date: '28/10/2024'},
    {sourse: 'Luna', text: 'Second', date: '01/12/2024'},
  ]

console.log(arrObj)

function groupObj (arr){
    const resObj = {};

    const result = Object.groupBy(arr, item => item.sourse);

    const keysResult = Object.keys(result)

    const valuesResult = Object.values(result)

    for(let i = 0; i < keysResult.length; i++){
      const resText = []
      valuesResult[i].forEach(item => resText.push(item.text));
    
        resObj[keysResult[i]] = resText

    }
    console.log(resObj)
    
}

groupObj(arrObj);

//Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group

function likeGroupBy (array){

    const arrGroup = []

      let mapArr = array.reduce((a, b) => {
        a[b.sourse] = a[b.sourse] || [];
        a[b.sourse].push(b); 
        return a;
      }, {});
      
      for (let key in mapArr) {
        arrGroup.push(mapArr[key]);
      }

      console.log('arrGroup:', arrGroup)
      
}

likeGroupBy(arrObj)