
import { Link, useLoaderData, Form } from 'react-router-dom'
import { getStudents, createStudent }  from '../data/studentservice'

export async function loader() {
  const students = await getStudents()
  return { students }
}

export async function action() {
  const student = await createStudent()
  return { student }
}

const Sidebar = ({toggled}) => {

  const {students } = useLoaderData()

  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Student Portfolios</div>
        <div className="list-group list-group-flush">
        <div className="list-group-item-warning list-group-item-action list-group-item-bold p-3">
          <Form method="post">
            <button className='btn'>New Student (Random)</button>
          </Form>
           

        </div>
        <div className="list-group-item-primary list-group-item-action list-group-item-bold p-3">
          <Link to={"/newStudent"}>New Student (FORM)</Link>
        </div>
        
          {students.map(student => (
            <div className="list-group-item list-group-item-action list-group-item-light p-3" key={student.id}>
              <Link to={`/student/${student.id}`}>{student.name}</Link>
            </div>
          ))}
           
        </div>
    </div>
  )
}

export default Sidebar