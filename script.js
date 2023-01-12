const getS = selector => document.querySelector(selector);
let login = document.querySelector('.log');
let password = document.querySelector('.pass');
let email = document.querySelector('.email');
let a = [];
let loginRegExp = /^[a-zA-Z]{4,16}$/;
let passRegExp = /^[a-zA-Z0-9-_.]{4,16}$/;
let poshta = /^[a-zA-Z0-9-.]{1,20}[@][a-zA-Z.]{1,20}$/;
let pp=0;
let num;
let t = document.querySelector('.tablpar');
console.log(document.querySelector('.tablres').lastChild);
document.querySelector('.add').addEventListener('click', function () {

    let testLogin1 = loginRegExp.test(login.value);
    let testLogin2 = passRegExp.test(password.value);
    let testLogin3 = poshta.test(email.value);
    if (testLogin1 && testLogin2 && testLogin3) {
        //   console.log(1);
        a.push(
            {
                log: login.value, pass: password.value, em: email.value
            }
            login.value='';
            password.value='';
            email.value='';
        );
    }
    login.value='';
    password.value='';
    email.value='';
    //  console.log(a[0].log);
    console.log(getS('.tablres').lastChild);
    console.log(getS('.tablres').children.length);

 //   console.log(a);
 //while(getS('.tablpar').children.length >0) {
       //  getS('.tablpar').removeChild(getS('.tablpar').firstChild); console.log(223); }
         getS('.tablpar').textContent='';
      //   console.log(a);
      let mm = document.createElement("tr");
      let mm1 = document.createElement("th");
      let mm2 = document.createElement("th");
      let mm3 = document.createElement("th");
      let mm4 = document.createElement("th");
      let mm5 = document.createElement("th");
      let mm6 = document.createElement("th");
      mm1.innerHTML=`#`;
      mm2.innerHTML=`login`;
      mm3.innerHTML=`password`;
      mm4.innerHTML=`Email`;
      mm5.innerHTML=`Edit`;
      mm6.innerHTML=`Delete`;
      mm.appendChild(mm1);
      mm.appendChild(mm2);
      mm.appendChild(mm3);
      mm.appendChild(mm4);
      mm.appendChild(mm5);
      mm.appendChild(mm6);
      t.appendChild(mm);

    for (let i = 0; i < a.length; i++) {
        // console.log(a[i].log);
        let r = document.createElement("tr");
        let k1 = document.createElement("td");
        let k2 = document.createElement("td");
        let k3 = document.createElement("td");
        let k4 = document.createElement("td");
        let k5 = document.createElement("button");
        let k6 = document.createElement("button");
k5.innerHTML=`Edit`;
k6.innerHTML=`Delete`;
k5.classList.add('styleedit');
k6.classList.add('styledelete');
let k7 = document.createElement("td");
let k8 = document.createElement("td");
k7.appendChild(k5);
k8.appendChild(k6);

        k1.innerHTML = i + 1;
        k2.innerHTML = a[i].log;
        k3.innerHTML = a[i].pass;
        k4.innerHTML = a[i].em;
        r.appendChild(k1);
        r.appendChild(k2);
        r.appendChild(k3);
        r.appendChild(k4);
        r.appendChild(k7);
        r.appendChild(k8);
    t.appendChild(r);}

})
t.addEventListener("click", function() {
console.log(event.target.type);
if(event.target.type === 'submit'){event.preventDefault();
    if (event.target.className == "styleedit") {
       console.log(event.target.parentElement);
        num=event.target.parentElement.parentElement.firstChild.innerText;
       console.log(num);
       login.value=a[num-1].log;
password.value=a[num-1].pass;
email.value=a[num-1].em;
document.querySelector('.ed').classList.remove('invis');
document.querySelector('.ed').classList.add('vis');
document.querySelector('.add').classList.add('invis');
}
    if (event.target.className == "styledelete") {
         num=event.target.parentElement.parentElement.firstChild.innerText;
         a.splice(num-1,1);
         getS('.tablpar').textContent='';
         let mm = document.createElement("tr");
         let mm1 = document.createElement("th");
         let mm2 = document.createElement("th");
         let mm3 = document.createElement("th");
         let mm4 = document.createElement("th");
         let mm5 = document.createElement("th");
         let mm6 = document.createElement("th");
         mm1.innerHTML=`#`;
         mm2.innerHTML=`login`;
         mm3.innerHTML=`password`;
         mm4.innerHTML=`Email`;
         mm5.innerHTML=`Edit`;
         mm6.innerHTML=`Delete`;
         mm.appendChild(mm1);
         mm.appendChild(mm2);
         mm.appendChild(mm3);
         mm.appendChild(mm4);
         mm.appendChild(mm5);
         mm.appendChild(mm6);
         t.appendChild(mm);
         for (let i = 0; i < a.length; i++) {
            // console.log(a[i].log);
            let r = document.createElement("tr");
            let k1 = document.createElement("td");
            let k2 = document.createElement("td");
            let k3 = document.createElement("td");
            let k4 = document.createElement("td");
            let k5 = document.createElement("button");
            let k6 = document.createElement("button");
    k5.innerHTML=`Edit`;
    k6.innerHTML=`Delete`;
    k5.classList.add('styleedit');
    k6.classList.add('styledelete');
    let k7 = document.createElement("td");
    let k8 = document.createElement("td");
    k7.appendChild(k5);
    k8.appendChild(k6);
    
            k1.innerHTML = i + 1;
            k2.innerHTML = a[i].log;
            k3.innerHTML = a[i].pass;
            k4.innerHTML = a[i].em;
            r.appendChild(k1);
            r.appendChild(k2);
            r.appendChild(k3);
            r.appendChild(k4);
            r.appendChild(k7);
            r.appendChild(k8);
        t.appendChild(r);}
    
    }
} 
})
document.querySelector('.ed').addEventListener('click', function () {
    getS('.tablpar').textContent='';

    a[num-1].log =login.value;
    a[num-1].pass=password.value;
    a[num-1].em=email.value;
    let mm = document.createElement("tr");
      let mm1 = document.createElement("th");
      let mm2 = document.createElement("th");
      let mm3 = document.createElement("th");
      let mm4 = document.createElement("th");
      let mm5 = document.createElement("th");
      let mm6 = document.createElement("th");
      mm1.innerHTML=`#`;
      mm2.innerHTML=`login`;
      mm3.innerHTML=`password`;
      mm4.innerHTML=`Email`;
      mm5.innerHTML=`Edit`;
      mm6.innerHTML=`Delete`;
      mm.appendChild(mm1);
      mm.appendChild(mm2);
      mm.appendChild(mm3);
      mm.appendChild(mm4);
      mm.appendChild(mm5);
      mm.appendChild(mm6);
      t.appendChild(mm);
    for (let i = 0; i < a.length; i++) {
        // console.log(a[i].log);
        let r = document.createElement("tr");
        let k1 = document.createElement("td");
        let k2 = document.createElement("td");
        let k3 = document.createElement("td");
        let k4 = document.createElement("td");
        let k5 = document.createElement("button");
        let k6 = document.createElement("button");
k5.innerHTML=`Edit`;
k6.innerHTML=`Delete`;
k5.classList.add('styleedit');
k6.classList.add('styledelete');
let k7 = document.createElement("td");
let k8 = document.createElement("td");
k7.appendChild(k5);
k8.appendChild(k6);

        k1.innerHTML = i + 1;
        k2.innerHTML = a[i].log;
        k3.innerHTML = a[i].pass;
        k4.innerHTML = a[i].em;
        r.appendChild(k1);
        r.appendChild(k2);
        r.appendChild(k3);
        r.appendChild(k4);
        r.appendChild(k7);
        r.appendChild(k8);
    t.appendChild(r);}
    login.value='';
    password.value='';
    email.value='';
    document.querySelector('.add').classList.add('vis');
    document.querySelector('.add').classList.remove('invis');
    document.querySelector('.ed').classList.remove('vis');
    document.querySelector('.ed').classList.add('invis');

})

