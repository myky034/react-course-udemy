export default function Section({ title, children, ...props }) {
  return (
    //{...props} => forwarding props to wrapped element
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
