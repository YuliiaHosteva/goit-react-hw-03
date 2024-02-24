import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from '../ContactForm/ContactForm.module.css';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format XXX-XX-XX"
    )
    .required("Required"),
});


const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.wrapForm}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
