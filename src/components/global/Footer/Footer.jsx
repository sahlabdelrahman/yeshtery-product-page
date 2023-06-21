import { Container, Grid } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import { footerData } from "../../../data";

import "./index.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="md">
        <main>
          <Grid container>
            <Grid item sm={5} className="firstPart">
              <img loading="lazy" alt="Logo" src="./images/footer-logo.png" />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt.
              </p>
            </Grid>
            <Grid item sm={7} className="secondPart">
              <h5>Subscribe to our newsletter</h5>
              <div className="inputContainer">
                <input type="text" placeholder="Enter Your Mail" />
                <button>
                  Subscribe
                  <SendOutlinedIcon />
                </button>
              </div>
              <Grid container>
                <Grid item sm={6} className="pages">
                  <ul>
                    {footerData.pages.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Grid>
                <Grid item sm={6} className="socialMediaLinks">
                  <ul>
                    {footerData.socialMediaLinks.map(({ label, logo }, i) => (
                      <li key={i}>
                        <img alt="Logo" src={logo} />
                        {label}
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </main>
        <footer>
          <ul>
            <li>
              <p>© 2021 yeshtery, all rights reserved.</p>
            </li>
            <li className="images">
              <img loading="lazy" alt="Cash" src="./images/cash.png" />
              <img loading="lazy" alt="Visa" src="./images/visa.png" />
              <img loading="lazy" alt="Master" src="./images/master.png" />
            </li>
            <li className="poweredBy">
              Powered By{" "}
              <img loading="lazy" alt="NasNva" src="./images/nasnav.png" />
            </li>
          </ul>
        </footer>
      </Container>
    </footer>
  );
}
