export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      {/* {...props} => forwarding props to wrapped element */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
