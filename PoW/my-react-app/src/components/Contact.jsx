function Contact() {
  return (
    <section id="contact" className="section">
      <h2><u><i>Contact Me</i></u></h2>

      <form className="contact-form">
        <input type="text" placeholder="Name" /><br/>
        <br/>

        <input type="email" placeholder="Email" /><br/>
        <br/>

        <textarea placeholder="Message"></textarea><br/>
        <br/>
        <button type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;