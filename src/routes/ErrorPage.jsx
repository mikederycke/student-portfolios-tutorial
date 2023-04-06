import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)


  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center row">
            <div class=" col-md-6">
                <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                    class="img-fluid" />
            </div>
            <div class=" col-md-6 mt-5">
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    {error.status} {error.statusText} {error.message}
                </p>
                <a href="/" class="btn btn-primary">Go Home</a>
            </div>

        </div>
    </div>  
  )
}

export default ErrorPage