import { useState} from "react";
import LabeledInput from '../Elements/LabeledInput';
import CheckBox from '../Elements/CheckBox';
import Button from '../Elements/Button';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
}); 

function FormSignIn( { onSubmit }) {

  return (
    <div className="mt-16">
        <Formik
          initialValues={{
            email: "",
            password: "",
            status: false,
          }}
          validationSchema={SignInSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await onSubmit(values.email, values.password);
            } finally {
              setSubmitting(false);
            }
          }}
        >
        
        {({ isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
              
              {/* EMAIL */}
              <div className="mb-6">
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="hello@example.com"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />  
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="●●●●●●●●●●●●●●"
                      autoComplete="current-password"
                    />
                  )}
                </Field> 
                
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                /> 
              </div>

              {/* CHECKBOX */}
              <div className="mb-3">
                <Field name="status">
                  {({ field }) => (
                    <CheckBox
                      {...field}
                      id="status"
                      type="checkbox"
                      checked={field.value}
                      label="Keep me signed in"
                    />
                  )}
                </Field>
              </div>
              
              {/* BUTTON */}
              <Button type="submit">{isSubmitting ? "Loading..." : "Login"}</Button>
              </form>
          )}
        </Formik>

      {/* sign in with google start */}
      <div className="mb-8 mt-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            {/* SVG Logo Google */}
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48"
            version="1.1">
              <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs>
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              ></g>
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign in with google end */}

      {/* link start */}
      <div className="flex justify-center">
        <Link to="/register" className="text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
      {/* link end */}

    </div>
  );
}

export default FormSignIn;