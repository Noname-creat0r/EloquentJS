class Group {
  constructor(){
    this.members = [];
  }
  
  has(value){
    return this.members.includes(value);
  }
  
  add(value){
  	if (!this.has(value))
      this.members.push(value);
  }
  
  delete(value){
    if (this.has(value))
      this.members.splice(this.members.indexOf(value), 1);
  }
  
  static from(iterable){
    let group = new Group();
    for (const value of iterable)
      group.add(value);
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
