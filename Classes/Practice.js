class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    static enrollStudents() {
        return 'Students have been enrolled!';
    }
}

let emil = new Student("Emil", "Katz", 3);


console.log(Student.enrollStudents());