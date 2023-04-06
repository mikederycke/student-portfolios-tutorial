
// give me a list of students fetched from https://jsonplaceholder.typicode.com/users
// and return them as a list of <li> elements

export async function getStudents() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users')
    return await resp.json()
      
}

export async function getStudent(id) {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    return await resp.json()
      
}