class App extends Domer {
  persons = [];

  constructor() {
    super();

    this.persons.push( new Person("Anna", 25, "Storgatan 1"));
    this.persons.push( new Person("Karl", 30, "Lillgatan 3"));
    this.persons.push( new Person("Jan", 40, "Mellangatan 2"));
    this.persons.push( new Person("Anneli", 25, "Storagatan 1"));
    this.persons.push( new Person("Lisa", 30, "Lillagatan 3"));
    this.persons.push( new Person("Sven", 40, "Mellanagatan 2"));
  }

  getPersons(){
    let result = ``;
    for (let person of this.persons){
      result += `
        <div id="square">${person.name} </div>
        <div id="square">${person.age} </div>
        <div id="square">${person.address} </div>    
      `
    }
    return result;
  }

  render(html) {
    return html`
      <section>
      ${this.getPersons()}
      </section>
    `
  }
}

new App()
