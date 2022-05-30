import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ProductList(props) {
  const products = props.products.map((product) => (
    <Grid item xs={4} key={product.id}>
      <img
        src={product.productPhoto}
        alt={product.label}
        width={"100%"}
        style={{ textAlign: "center" }}
      />
      <Typography variant="h5" component="h2" align="center">
        <Link to={product.id} color="inherit">
          {" "}
          {product.label}{" "}
        </Link>
      </Typography>
      <Typography variant="p" component="h2" align="center">
        {product.shortDescription}
      </Typography>
    </Grid>
  ));
  return (
    <React.Fragment>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            textTransform: "uppercase",
          }}
        >
          Recommend Products
        </Typography>
        <Grid container spacing={4}>
          {products}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default ProductList;
