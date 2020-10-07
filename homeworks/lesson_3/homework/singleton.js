/*
  Задание:

    Написать синглтон, который будет создавать обьект government

    Данные:
    {
        laws: [
        {
          id: 0,
          text: '123123'
        }
      ],
        budget: 1000000
        citizensSatisfactions: 0,
    }

    У этого обьекта будут методы:
      .добавитьЗакон({id, name, description})
        -> добавляет закон в laws и понижает удовлетворенность граждан на -10

      .читатькКонституцию -> Вывести все законы на экран
      .читатьЗакон(ид)

      .показатьУровеньДовольства()
      .показатьБюджет()
      .провестиПраздник -> отнимает от бюджета 50000, повышает удовлетворенность граждан на +5
      [{
      id: 0,
      name: '',
      description: ''
      }])
      
*/
const c_main = document.querySelector('.main');

class Single {
      constructor (name) {
    if(Single.instance === null){
    this.name = name,
    this.laws = [{id:'ID', title:'TITLE', description: 'LAW DESCRIPTION'}],
    this.budget = '1000000',
    this.citizensSatisfactions = '0',
    this.addLaw = this.addLaw.bind(this);
    this.readConstitution = this.readConstitution.bind(this);
    this.readingLaw = this.readingLaw.bind(this);
    this.readingLawConsole = this.readingLawConsole.bind(this);
    this.showSatisfaction = this.showSatisfaction.bind(this);
    this.eventOrganizers = this.eventOrganizers.bind(this);
    Single.instance = this;
  }
  return Single.instance
}
 
  addLaw(a){
  this.laws.push(a);
  this.citizensSatisfactions-=10;
  console.log(this);
  console.log(this.laws);
  }

  readConstitution(){
   
   this.laws.forEach(function(law){
    var v_readConst = document.createElement('div');
    v_readConst.className = 'readConst';   
    for(var key in law){
    var v_readLaw = document.createElement('div');
    v_readLaw.className = 'readLaw';
    v_readLaw.innerHTML = law[key];
    v_readConst.appendChild(v_readLaw);
    }
    c_main.appendChild(v_readConst);
   })
   console.log(c_main);
  }

  readingLaw(id){
    this.laws.forEach(function(law){
     var v_readConst = document.createElement('div');
     v_readConst.className = 'readConst';  
      if(law.id == id || law.id == 'ID'){
       for(var key in law){
         var v_readLaw = document.createElement('div');
         v_readLaw.className = 'readLaw';
         v_readLaw.innerHTML = law[key];
         v_readConst.appendChild(v_readLaw);
         }
         c_main.appendChild(v_readConst);
      }
    })
   }
  
   readingLawConsole(id){
    return this.laws.find(function(law){
     return law.id === id
     })
    }

    showSatisfaction(){
      const c_sider = document.querySelector('.sider');
      var showSat = document.createElement('div');
      showSat.className = 'show';
      showSat.innerHTML = `INDEX of Citizens' Satisfaction : ${this.citizensSatisfactions}`;
      c_sider.appendChild(showSat)

    }

    showBudget(){
      const c_sider = document.querySelector('.sider');
      var showBudg= document.createElement('div');
      showBudg.className = 'show';
      showBudg.innerHTML = `Budget is : ${this.budget} UAH`;
      c_sider.appendChild(showBudg);
    }

    eventOrganizers(){
      this.citizensSatisfactions+=5;
      this.budget-=50000;
      const c_sider = document.querySelector('.sider');
      var v_showAll = document.createElement('div');
      v_showAll.className = 'showAll';
      v_showAll.innerHTML = 
      `<div class='show'>INDEX of Citizens' Satisfaction : ${this.citizensSatisfactions}</div>
       <div class='show'>Budget is : ${this.budget} UAH</div>
      `;
      c_sider.appendChild(v_showAll);
      console.log(this.citizensSatisfactions , this.budget)
    }

}

Single.instance = null;

var government = new Single('Government');
var law1 = {id:1, title:"On Amendments to the Tax Code of Ukraine Relating to Certain Issues of Charitable Aid Taxation", description:'The Tax Code of Ukraine regulates relations arising in the sphere of levying of taxes and fees, in particular, determines an exhaustive list of taxes and fees levied in Ukraine, and the procedure for their administration, payers of taxes and fees, their rights and obligations, the competence of controlling authorities, the authority and obligations of their officials during tax control, and the liability for violating tax legislation (Article 1 of the Tax Code of Ukraine).'}
var law2 = {id:2, title:"On Lustration", description:'The Law determines the legal and organizational principles of lustration, in order to protect and uphold democratic values, the supremacy of law, and human rights in Ukraine.'}
var law3 = {id:3, title:"Temporary restrictions on the entry of foreigners and stateless persons to Ukraine", description:'In view of the growing number of new COVID-19 cases in Ukraine, the Government has made a decision to impose temporary restrictions on the entry of foreigners and stateless persons to Ukraine. The restrictions will apply onward from 00:00, August 28 until 00:00, September 28, 2020.'}
var law4 = {id:4, title:"On Amendments to the Law of Ukraine 'On Medicines'", description:'The Law of Ukraine "On Medicines" N123/96-VR of April 4, 1996 regulates legal relations associated with creation, registration, production, quality control, and sale of medicines, determines the rights and obligations of companies, institutions, organizations, and citizens, and the competence of executive authorities and officials in this sphere.'}

government.addLaw(law1);
government.addLaw(law2);
// government.addLaw(law3);
government.addLaw(law4);

government.readConstitution();
// government.readingLaw(4)
// var test = government.readingLawConsole(2)
// console.log(test)
// government.showSatisfaction();
// government.showBudget();
// console.log(test);
government.eventOrganizers();