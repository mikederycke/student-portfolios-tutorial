
// give me a list of students fetched from https://jsonplaceholder.typicode.com/users
// and return them as a list of <li> elements

export async function getStudents() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await resp.json()
    //add students from localstorage to the list
    let students = localStorage.getItem('students')
    if (students) {
        students = JSON.parse(students)
        data = data.concat(students)
    }
    return data
      
}

export async function getStudent(id) {
    let students = await getStudents();
    let student = students.find(student => student.id == id)
    return student
}

export async function createStudent({email, fullname} = {}) {
    
    let student = {
        id: Math.floor(Math.random() * 1000),
        name: 'John Doe',
        email: 'john@email.com'	
    }
    if(email){
        student.email = email
        student.name = fullname
    }

    let students = localStorage.getItem('students')
    if (students) {
        students = JSON.parse(students)
    }else {
        students = []
    }
    students.push(student)
    localStorage.setItem('students', JSON.stringify(students))
    return student
      
}