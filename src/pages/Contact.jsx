import Button from "../components/Button";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello"); // to add functionality
  };
  return (
    <div className="contact">
        <h2>Contact Us</h2>
      <form action="/contact" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="enter your name" />
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="enter your email" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <Button color="neutral btn" type buttonType={"submit"}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
