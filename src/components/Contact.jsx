import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kumars302003@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _replyto: email,
            _subject: `Portfolio message from ${name}`,
          }),
        },
      );
      const result = await response.json();

      if (
        !response.ok ||
        (result.success !== "true" && result.success !== true)
      ) {
        throw new Error(result.message || "The message could not be sent.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out!",
      });
    } catch (error) {
      console.error("Unable to send contact form message:", error);
      setStatus({
        type: "error",
        message: "Could not send your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <div className="section-heading">
        <p>CONTACT ME</p>

        <h2>
          Let's <span>Work Together</span>
        </h2>

        <p className="heading-description">
          Have an opportunity or want to discuss a project? Feel free to get in
          touch with me.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's connect</h3>

          <p>
            Based in Rewa, Madhya Pradesh. Get in touch about full-stack
            development opportunities or project collaborations.
          </p>

          <div className="contact-item">
            <div className="contact-icon">@</div>

            <div>
              <h4>Email</h4>

              <a href="mailto:kumars302003@gmail.com">kumars302003@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">PH</div>

            <div>
              <h4>Phone</h4>

              <a href="tel:+919630575516">+91 96305 75516</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">in</div>

            <div>
              <h4>LinkedIn</h4>

              <a
                href="https://www.linkedin.com/in/sujay-mishra-b6a8ba374"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">GH</div>

            <div>
              <h4>GitHub</h4>

              <a
                href="https://github.com/sujaym18-blip"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a message</h3>
          <p>
            Send me a message directly from this form.
          </p>

          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="How can I help?"
              required
            />
          </div>

          {status.message && (
            <p className={`form-status ${status.type}`} role="status">
              {status.message}
            </p>
          )}

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Mail"}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
