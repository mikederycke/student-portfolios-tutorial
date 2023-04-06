import React from 'react'
import { redirect, Form as RouterForm } from 'react-router-dom'
import { Button, InputGroup, Form } from 'react-bootstrap'
import {createStudent} from '../data/studentservice'

export async function action({request, params}) {
    const formData = await request.formData()
    const email = formData.get('email')
    const fullname = formData.get('fullname')
    const student = await createStudent({email, fullname})
    return redirect(`/student/${student.id}`)
  }

const StudentForm = () => {
  return (
    <>
        <RouterForm method="post">
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control placeholder="email" name='email'
                />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
                <Form.Control placeholder="Full name" name='fullname' 
                />
            </InputGroup>
            <Button type="submit">Submit</Button>
        </RouterForm>
    </>
  )
}

export default StudentForm