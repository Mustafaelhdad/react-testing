function Greet({ name = "" }) {
  if (name) return <div>Hello {name}</div>;

  return <div>Hello</div>;
}

export default Greet;
