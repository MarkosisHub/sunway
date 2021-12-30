import React from "react"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={`${styles.contactWrapper} container`}>
        <div className={styles.contactDetails}>
          <h3>Contact us</h3>
          <p>Book a free appoinment to consult your desired topic</p>
          <form className={styles.contactForm}>
            <div className={`${styles.formGroup} ${styles.formGrid}`}>
              <div>
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  name="firstName"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  placeholder="Your last name"
                  name="lastName"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                name="email"
              />
            </div>
            <div className={`${styles.formGroup} ${styles.formGrid}`}>
              <div>
                <label htmlFor="country">Country</label>
                <select name="country" id="">
                  <option value="">Select</option>
                  <option value="">select</option>
                  <option value="">select</option>
                  <option value="">select</option>
                  <option value="">select</option>
                </select>
              </div>
              <div>
                <label htmlFor="number">Number</label>
                <input type="text" placeholder="Your phone" name="number" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="topic">Topic</label>
              <input
                type="text"
                placeholder="Write the topic you want to talk about"
                name="topic"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Your message here"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className={`${styles.formGroup} ${styles.formGroupBtn}`}>
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
