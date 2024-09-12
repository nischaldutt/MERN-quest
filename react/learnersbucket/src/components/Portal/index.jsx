import react from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";

function Portal() {
  const portalContent = (
    <div className={styles.portal}>
      <p>this is a portal</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("portal button clicked");
        }}
      >
        hey
      </button>
    </div>
  );

  return createPortal(portalContent, document.body);
}

export default Portal;
