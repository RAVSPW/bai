names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        return this.names.filter(name => name.charAt(0) === letter);
    }

    sort() {
        return this.names.sort();
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        return this.names.slice(0, n);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());

console.log(students.sort().getFirst(4));

console.log(students.startWith('M').sort().getFirst(2));

console.log(students.get());


class StudentsExample {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        return [...this.names].filter(name => name.charAt(0) === letter);
    }

    sort() {
        return [...this.names].sort();
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        return [...this.names].slice(0, n);
    }
}

names2 = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

studentsExample = new StudentsExample(names2);
console.log(studentsExample.get());
console.log(studentsExample.sort());
console.log(studentsExample.startWith('P'));
console.log(studentsExample.startWith('M').sort());
console.log(studentsExample.get());
