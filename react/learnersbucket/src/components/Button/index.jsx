import react from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

function Button({
  onClick,
  label,
  children,
  variant = "basic",
  className = "",
  size = "",
  disabled = false,
}) {
  const _className = cx(
    className,
    styles[size],
    styles.button,
    styles[variant],
    { [styles.disabled]: disabled }
  );

  function handleClick(e) {
    if (disabled) return;
    onClick && onClick({ e });
  }

  function renderChildren() {
    return label || children || "Button";
  }

  return (
    <button className={_className} onClick={handleClick} disabled={disabled}>
      {renderChildren()}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
