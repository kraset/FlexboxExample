class Person extends Domer{

    _name;
    _age;
    _address;

    constructor(name, age, address){
        super();
        this._name = name;
        this._age = age;
        this._address = address;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get address(){
        return this._address;
    }

    render(html) {
        return html`
          <div>
            ${this._name} ${this._age}
          </div>
        `
    }
    
}