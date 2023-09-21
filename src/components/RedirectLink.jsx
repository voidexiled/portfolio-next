import Link from "next/link";
import React from "react";

// This is the custom wrapper component you would build and use just like `next/link`:

export class RedirectLink extends React.Component {
  render() {
    const { onCustomClick, ...props } = this.props;
    return <a {...props} onClick={this.handleClick} />;
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event);
    }
  };
}

// This is some example where you would use `MyLink` including a click handler
