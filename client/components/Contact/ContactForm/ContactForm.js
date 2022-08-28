import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "./ContactForm.module.css";
import { submit } from './../../../api/contact';

const ContactForm = () => {
  const inputs = [
    {
      name: "first_name",
      type: "text",
      placeholder: "First Name",
      required: true,
      label: "First Name",
      star: "*",
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "Last Name",
      required: true,
      label: "Last Name",
      star: "*",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      label: "E-mail Address",
      star: "*",
    },
    {
      name: "phone_number",
      placeholder: "Phone Number",
      type: "number",
      required: true,
      label: "Phone Number",
      star: "*",
    },
    {
      name: "p_type",
      //   placeholder: "Phone Number",
      type: "select",
      required: true,
      label: "Project Type",
      star: "*",
    },
    {
      name: "p_budget",
      //   placeholder: "Phone Number",
      type: "select",
      required: true,
      label: "Project Budget",
      star: "*",
    },
    {
      name: "message",
      placeholder: "Message",
      required: true,
      label: "Your Message",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const data = {};
      inputs.forEach(({ name }) => (data[name] = formData.get(name)));
      console.log(data);
      await submit(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.contactFormMain}>
      <div className={styles.abstractRight}></div>
      <div className={styles.abstractMore}></div>
      <div className="container">
        <div className={styles.contactForm}>


          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0282681502695!2d-119.0992489707923!3d35.30317179876777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea40fc22000089%3A0x972bf18df8a69913!2sYoung%20St%2C%20Bakersfield%2C%20CA%2093313%2C%20USA!5e0!3m2!1sen!2sbd!4v1661255962207!5m2!1sen!2sbd"
              className={styles.map}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <form onSubmit={handleSubmit} id="contact-form">
              <Row>
                {inputs.map(
                  ({ name, type, placeholder, required, label, star }) => (
                    <Col
                      key={name}
                      lg={type ? 6 : 12}
                      md={type ? 6 : 12}
                      sm={12}
                      className={styles.formGroupMain}
                    >
                      <div className="field-inner">
                        {type ? (
                          <Form.Group
                            className={styles.formGroup}
                            controlId="exampleForm.ControlInput1"
                          >
                            {type !== "select" && (
                              <Form.Label className={styles.formLabel}>
                                {label} <span>{star}</span>
                              </Form.Label>
                            )}
                            {name === "phone_number" ? (
                              <input
                                type={type}
                                placeholder={placeholder}
                                required={required}
                                onInput={(e) => {
                                  e.target.setCustomValidity("");
                                }}
                                onInvalid={(e) =>
                                  e.target.setCustomValidity(
                                    "Phone number at least 10 digits"
                                  )
                                }
                                name={name}
                              />
                            ) : (
                              type === "email" ? (
                                <input
                                  type={type}
                                  name={name}
                                  placeholder={placeholder}
                                  required={required}
                                />
                              ) : (
                                type === "text" ? (
                                  <input
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    required={required}
                                  />
                                ) : ("")
                              )
                            )}
                          </Form.Group>
                        ) : (
                          <Form.Group
                            className={styles.formGroup}
                            controlId="exampleForm.ControlInput1"
                          >
                            <Row>
                              <Col lg={6} md={6} sm={12}>
                                <Form.Label className={styles.formLabel}>
                                  Project Type<span>*</span>
                                </Form.Label>
                                <Form.Select size="lg" name="p_type" className={styles.formSelect}>
                                  <option value={'Brand Development'}>Brand Development</option>
                                  <option value={'Web Design'}>Web Design</option>
                                  <option value={'Video Production'}>Video Production</option>
                                  <option value={'Business Consulting'}>Business Consulting</option>
                                  <option value={'Combination'}>Combination</option>
                                </Form.Select>
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                                <Form.Label className={styles.formLabel}>
                                  Project Budget<span>*</span>
                                </Form.Label>
                                <Form.Select name="p_budget" size="lg" className={styles.formSelect}>
                                  <option value={'$500 - 1k'}>$500 - 1k</option>
                                  <option value={'$1 - 2k'}>$1 - 2k</option>
                                  <option value={'$3 - 5k'}>$3 - 5k</option>
                                  <option value={'$7 - 10k'}>$7 - 10k</option>
                                  <option value={'$10k+'}>$10k+</option>
                                </Form.Select>
                              </Col>
                            </Row>
                            <Form.Label className={styles.formLabel}>
                              {label}{" "}
                            </Form.Label>
                            <textarea
                              name={name}
                              placeholder={placeholder}
                              required={required}
                              className={styles.formTextarea}
                            ></textarea>
                          </Form.Group>
                        )}
                      </div>
                    </Col>
                  )
                )}
                <Col lg={3} md={3} sm={12} className="form-group">
                  <button className={styles.submitButton}>
                    <span>Submit</span>
                    <i className="ri-arrow-right-up-line"></i>
                  </button>
                </Col>
                <Col lg={9} md={9} sm={12} className="form-group">
                  <p className={styles.formEndText}>
                    Your email address will not be published.
                  </p>
                  <p className={styles.formEndText}>
                    Required fields are marked *
                  </p>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
