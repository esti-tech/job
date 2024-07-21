import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Header from '../Header';
const initialFormSchema = {
  title: 'Untitled Form',
  description: 'This is my form. Please fill it out. It\'s awesome!',
  fields: []
};
const validationSchema = Yup.object({
  title: Yup.string().required('Form title is required'),
  description: Yup.string().required('Description is required'),
  fields: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required('Label is required'),
      type: Yup.string().required('Type is required')
    })
  )
});
const FormBuilder = () => {
  const [formSchema, setFormSchema] = useState(initialFormSchema);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedFields = Array.from(formSchema.fields);
    const [movedField] = reorderedFields.splice(result.source.index, 1);
    reorderedFields.splice(result.destination.index, 0, movedField);
    setFormSchema({ ...formSchema, fields: reorderedFields });
  };

  const handleSubmit = (values) => {
    console.log('Form Schema:', values);
  };

  return (
    <div>
      <Header />
      <h1>Peep Form Builder</h1>
      <Formik
        initialValues={formSchema}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div>
              <label>Form Title</label>
              <Field name="title" type="text" />
            </div>
            <div>
              <label>Description</label>
              <Field name="description" as="textarea" />
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {values.fields.map((field, index) => (
                      <Draggable key={index} draggableId={String(index)} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ ...provided.draggableProps.style, margin: '10px 0' }}
                          >
                            <div>
                              <label>Field Label</label>
                              <Field name={`fields.${index}.label`} type="text" />
                            </div>
                            <div>
                              <label>Field Type</label>
                              <Field name={`fields.${index}.type`} as="select">
                                <option value="">Select Type</option>
                                <option value="text">Single Line Text</option>
                                <option value="paragraph">Paragraph Text</option>
                                <option value="multiple_choice">Multiple Choice</option>
                                <option value="section_break">Section Break</option>
                                <option value="number">Number</option>
                                <option value="checkboxes">Checkboxes</option>
                                <option value="dropdown">Dropdown</option>
                                <option value="page_break">Page Break</option>
                                <option value="file_upload">File Upload</option>
                                <option value="date">Date</option>
                                <option value="time">Time</option>
                                <option value="website">Website</option>
                                <option value="rating">Rating</option>
                                <option value="likert">Likert</option>
                                <option value="doc_sign">DocuSign</option>
                              </Field>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <button type="submit">Save Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormBuilder;