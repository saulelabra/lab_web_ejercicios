//Saúl Enrique Labra Cruz A01020725
class Contact {
  constructor(id, name, surname, phone, address) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.address = address;
  }

  setId(id){
    this.id=id;
  }

  setName(name){
    this.name=name;
  }

  setSurname(surname){
    this.surname=surname;
  }

  setPhone(phone){
    this.phone=phone;
  }

  setAddress(address){
    this.address=address;
  }

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  getSurname(){
    return this.surname;
  }

  getPhone(){
    return this.phone;
  }

  getAddress(){
    return this.address;
  }


}

export default Contact;
