import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStudent }  from '../data/studentservice'

export async function loader({params}) {
    const student = await getStudent(params.id)
    return { student }

}


const Content = () => {

    const { student } = useLoaderData()

  return (
    <div>
        <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        {student.name} 
                        
                    </h1>
                    <div className="subheading mb-5">
                        <a href="mailto:name@email.com">{student.email}</a>
                    </div>
                    <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
           
           
    </div>
  )
}

export default Content