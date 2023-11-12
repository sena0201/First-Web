class Queue<T>{
    private data:T[] = [];
    
    add(item:T){
        this.data.push(item);
    }

    remove(item){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add("Kha");

const numberQueue = new Queue<number>();
numberQueue.add(5);