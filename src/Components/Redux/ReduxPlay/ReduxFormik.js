import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { additem } from "../Actions/index";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const makeList = (list) => {
    return (<ul>
        {list.map((item) =>{
          return <li>{item}</li>
        }
        )}
      </ul>)
}


class ReduxFormik extends Component {
    render() {
        return (
            <div>
                <p>{makeList(this.props.todo)}</p>
                <Formik
                initialValues = {{
                    entry:'',
                }}
                validationSchema={
                    Yup.object({
                        entry: Yup.string()
                            .required('Required'),
                    })
                }
                onSubmit = {(values, {setSubmitting, resetForm}) => {
                        const newValue = values.entry;
                        this.props.additem(newValue);
                        resetForm()
                        setSubmitting(false);
                }}
                >
                    {props => (
                        <Form>
                            <label htmlFor="entry">Add Item</label>
                            <Field type="text" name="entry"></Field>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todo,
})

ReduxFormik.propTypes = {
    additem: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {additem})(ReduxFormik);
