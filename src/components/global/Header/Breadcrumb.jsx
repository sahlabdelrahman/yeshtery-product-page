import { Breadcrumbs, Container, Link, Typography } from "@mui/material";

export default function Breadcrumb({ data }) {
  return (
    <div className="breadcrumb">
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb">
          {data.map((item, i) => {
            if (i === data.length - 1)
              return <Typography key={item}>{item}</Typography>;
            else
              return (
                <Link
                  key={item}
                  style={{ textDecoration: "underline" }}
                  href="/"
                >
                  {item}
                </Link>
              );
          })}
        </Breadcrumbs>
      </Container>
    </div>
  );
}
