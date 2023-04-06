
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
    let resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    return await resp.json()
      
}

export async function createStudent() {
    let student = {
        name: 'John Doe',
        email: 'john@email.com'	
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