import { Box, Divider } from "@mui/material";
import { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <>
      <Divider />
      <Box>
        <a
          className={styles.footer}
          href="https://sergeygrigorash.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Личный сайт (открывается в новой вкладке)"
        >
          Сергей Григораш © 2024
        </a>
      </Box>
    </>
  );
};

export default Footer;
