import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
    // Submit the data to a server using fetch or axios
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact Us</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name', { required: true })} />
        {errors.name && <div className="invalid-feedback">Name is required</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && errors.email.type === 'required' && <div className="invalid-feedback">Email is required</div>}
        {errors.email && errors.email.type === 'pattern' && <div className="invalid-feedback">Email is invalid</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Technical Background</label>
        <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`} {...register('message', { required: true })} />
        {errors.message && <div className="invalid-feedback">Technical Background is required</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ContactForm;
