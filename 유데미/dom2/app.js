//document.body.children[2].children[0].href = 'https://www.naver.com';

let aaa = document.getElementById('idid');

aaa.href = 'https://www.naver.com';



let newTag = document.createElement('p');
newTag.textContent = '하이';

let bbb = document.querySelector('body');
bbb.append(newTag);



let newElement = document.createElement('a');
newElement.href = 'https://www.google.com';
newElement.textContent = '구글이동';

let firstParagraph = document.querySelector('p');

firstParagraph.append(newElement);


//let firstH1 = document.querySelector('h1');
//firstH1.remove();
firstParagraph.parentElement.append(firstParagraph);



firstParagraph.innerHTML = '안녕 이건 정말 <b>중요한 부분</b>이야.';