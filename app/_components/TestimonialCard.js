function TestimonialCard({ comment, author, enterprise }) {
  return (
    <li className="border border-[#f6a46b] px-10 py-15">
      <p className="mb-10">&quot;{comment}&quot;</p>
      <p>
        <strong>{author}</strong>,{enterprise}
      </p>
    </li>
  );
}

export default TestimonialCard;
