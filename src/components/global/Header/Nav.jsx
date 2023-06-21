import { Container } from "@mui/material";

export default function Nav({ data }) {
  return (
    <nav className="nav">
      <Container maxWidth="md">
        <ul className="links">
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
