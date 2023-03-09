import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "./BlogComments.module.css";

const BlogComments = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "/images/BlogDetails1/Ellipse 7.png",
      name: "Esther Howard",
      text: " Tellus consequat, habitant ac neque a. Hac mattis consectetur congue lacus amet velit lobortis in semper. Suspendisseconsectetur sed ullamcorper eget nunc. Vitae lacus, lectus arcu blandit venenatis sit. Tellus ultricies.",
      likes: "312",
      dislikes: "12",
    },
    {
      id: 2,
      image: "/images/BlogDetails1/Ellipse 7.png",
      name: "Esther Howard",
      text: " Tellus consequat, habitant ac neque a. Hac mattis consectetur congue lacus amet velit lobortis in semper. Suspendisseconsectetur sed ullamcorper eget nunc. Vitae lacus, lectus arcu blandit venenatis sit. Tellus ultricies.",
      likes: "312",
      dislikes: "12",
    },
    {
      id: 3,
      image: "/images/BlogDetails1/Ellipse 7.png",
      name: "Esther Howard",
      text: " Tellus consequat, habitant ac neque a. Hac mattis consectetur congue lacus amet velit lobortis in semper. Suspendisseconsectetur sed ullamcorper eget nunc. Vitae lacus, lectus arcu blandit venenatis sit. Tellus ultricies.",
      likes: "312",
      dislikes: "12",
    },
    {
      id: 4,
      image: "/images/BlogDetails1/Ellipse 7.png",
      name: "Esther Howard",
      text: " Tellus consequat, habitant ac neque a. Hac mattis consectetur congue lacus amet velit lobortis in semper. Suspendisseconsectetur sed ullamcorper eget nunc. Vitae lacus, lectus arcu blandit venenatis sit. Tellus ultricies.",
      likes: "312",
      dislikes: "12",
    },
  ]);

  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Full Name",
      required: true,
      label: "Full Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      label: "E-mail Address",
    },
    {
      name: "text",
      placeholder: "Write your Text...",
      required: true,
      label: "Your Message",
    },
  ];

  const handleSubmitComment = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const comment = {};
      inputs.forEach(({ name }) => (comment[name] = formData.get(name)));
      comment.likes = 0;
      comment.dislikes = 0;
      comment.image = "/images/BlogDetails1/Ellipse 7.png";
      comment.id = data.length + 1;
      setData([...data, comment]);
      // reset the form
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="container">
      <div className={styles.blogComments}>
        <div className={styles.blogHeader}>
          <h1>Comments ({data.length})</h1>
          <div className={styles.blogHeaderTop}>
            <h4>Top comments</h4>
            <span>
              <img src="/images/BlogDetails1/Vector (2).svg" alt="" />
            </span>
          </div>
        </div>

        <div>
          {data.map((item, i) => (
            <div className={styles.comments}>
              <div className={styles.imageAvatar}>
                <img src={item.image} alt="" />
              </div>
              <div>
                <div className={styles.avatarName}>
                  <h5>{item.name}</h5>
                  <span>...</span>
                </div>
                <p className={styles.avatarComment}> {item.text}</p>
                <div className={styles.likeButton}>
                  <div className={styles.likes}>
                    <img src="/images/BlogDetails1/thumbsup.svg" alt="" />
                    <p>{item.likes}</p>
                  </div>
                  <div className={styles.likes}>
                    <img src="/images/BlogDetails1/thumbsdown.svg" alt="" />
                    <p>{item.dislikes}</p>
                  </div>
                  <p>Reply</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.replyForm}>
          <h1>Comments</h1>
          <div>
            <form onSubmit={(e) => handleSubmitComment(e)} id="contact-form">
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
                            <input
                              type={type}
                              name={name}
                              placeholder={placeholder}
                              required={required}
                            />
                          </Form.Group>
                        ) : (
                          <Form.Group
                            className={styles.formGroup}
                            controlId="exampleForm.ControlInput1"
                          >
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
                    <span>Submit your Comments</span>
                  </button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComments;
