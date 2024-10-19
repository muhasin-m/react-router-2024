const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" name="email" id="email" placeholder="Email" />
        <br />
        <textarea name="" id="" placeholder="Message"></textarea> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;
