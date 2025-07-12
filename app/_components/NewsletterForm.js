function NewsletterForm() {
  return (
    <form className="flex flex-col w-100 gap-4">
      <input type="text" className="bg-white px-5 py-2" placeholder="Name" />
      <input type="text" className="bg-white px-5 py-2" placeholder="E-mail" />
    </form>
  );
}

export default NewsletterForm;
