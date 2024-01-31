import React from 'react'
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { useForm } from 'react-hook-form'


export default function LoginP() {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <Form onSubmit={handleSubmit(handle)} className="CONT">
        <h1 className="bdg">
          Shopwise <Badge id="bg2" bg="secondary">LOG-IN</Badge>
        </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control   {...register("email")} type="email" placeholder="Enter email" />

        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  {...register("password")} type="password" placeholder="Password" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <a id="FP" href="#!">Forgot password?</a> </Form.Group>

        <button className="bttn" type='submit'>Submit</button>



      </Form>









    </>
  )
  function handle(data) {

    console.log(data)
  }
}
