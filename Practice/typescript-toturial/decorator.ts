
function MenuItem(target:Function){
    target.prototype.id = 'abc'
}

@MenuItem
class Pizza {
    id: string;
}

class Hamburger {
    id: string;
}

console.log(new Pizza().id);