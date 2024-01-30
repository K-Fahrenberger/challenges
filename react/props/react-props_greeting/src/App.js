import "./styles.css";

export default function Greeting({ name = "George" }) {
  return <div>Hello, {name}!</div>;
}
