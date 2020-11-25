import React from "react";

const Link = ({ href, className, children }) => {
  const handleClick = (e) => {
    // if ctrl or cmd key is pressed, open in new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // prevent hard refresh of the page when the link on the
    // header is clicked so as not to download and reload the
    // existing resources
    e.preventDefault();

    // sync the location with what the present route of app
    // ie. change the url in the address bar
    window.history.pushState({}, "", href);

    // communicate to the route components that
    // the url has just changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
