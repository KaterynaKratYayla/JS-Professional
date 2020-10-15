/*

    Используя методы для создания объектов из задания по композиции написать фабику (HeadHunt), которая будет
    расспределять и создавать сотрудников компании нужного типа.

    Данные для списка сотрудников: http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2

    HeadHunt => {
        hire( obj ){
        ...
        }
    }

    Привязать к интерфейсу и вывести на страницу. На кнопку нанять повесить метод hire из фабрики
*/

class Workers{
 constructor(){   
    this.renderData = this.renderData.bind(this)
    this.renderHire = this.renderHire.bind(this)
 }
    
 renderData(){
    var v_data = document.querySelector('.data');
    let l_details = document.createElement('div');
    
    l_details.className = 'details';
    l_details.innerHTML = `
      <div class='nameage'>${this.name }(${this.age})</div>
      <div>${this.type}</div>
      <button class='toHire'>Нанять</button>
     `
    var HireButton = l_details.querySelector('.toHire')
    HireButton.addEventListener('click',this.renderHire)

    v_data.appendChild(l_details);
}

 renderHire(e){
    e.target.setAttribute('disabled','true');
    var v_chosen = document.querySelector('.chosen');
    let l_hiredDetails = document.createElement('div');
    l_hiredDetails.className = 'hiredDetails';
    l_hiredDetails.innerHTML = `
      <div>${this.name }(${this.type}) at ${this.rate} USD / hour</div>
     `
    v_chosen.appendChild(l_hiredDetails)
  }
}

class Backend extends Workers{
    constructor({age, gender, name, rate,type}){
        super({age, gender, name, rate,type})
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.rate = rate;
        this.type = type;
    }
}

class Frontend extends Workers{
    constructor({age,gender, name, rate,type}){
        super({age, gender, name, rate,type})
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.rate = rate;
        this.type = type;
    }
}

class Project extends Workers{
    constructor({age,gender, name, rate,type}){
        super({age, gender, name, rate,type})
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.rate = rate;
        this.type = type;
    }
}

class Design extends Workers{
    constructor({age,gender, name, rate,type}){
        super({age, gender, name, rate,type})
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.rate = rate;
        this.type = type;
    }
}

class Team {
     Hire(staff){
        let WorkerClass = null; 
        if(staff.type === 'backend'){
            WorkerClass = Backend;
        }
        else if(staff.type === 'frontend'){
            WorkerClass = Frontend;
        }
        else if(staff.type === 'project'){
            WorkerClass = Project;
        }
        else if(staff.type === 'design'){
            WorkerClass = Design;
        }
        else {return false}
        return new WorkerClass(staff)
    }
}

fetch('http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2')
 .then(
     (res)=>{
         console.log(res);
         return res.json();
     }
 ).then(
     (data)=>{
         data.forEach(item=>{
            //  console.log(item);
             
             const HR = new Team();
             const HireStaff = HR.Hire({
                 age: item.age,
                 gender: item.gender,
                 name: item.name,
                 rate: item.rate,
                 type: item.type
             })
             HireStaff.renderData();
             console.log(HireStaff)
         })
     }
 )

