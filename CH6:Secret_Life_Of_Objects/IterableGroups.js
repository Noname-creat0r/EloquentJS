/*Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.*/

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

class GroupIterator{
  constructor(group){
    this.position = 0;
  	this.group = group;
  }
  
  next(){
  	if (this.group.members.length == this.position)
      return {done: true};
    
    let value = this.group.members[this.position];
    this.position++;
    
    return {value, done: false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
