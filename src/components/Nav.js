import React, { Component } from 'react';

class Nav extends Component {

    colorButton = (e) => {

      const button_name = e.target.innerHTML;
      const button_color = window.getComputedStyle(e.target).backgroundColor;
      const all_buttons_li = document.querySelectorAll(".color-buttons ul li");
      const button_top = document.querySelector(".color-buttons__top--selected");
      const filters = [
        {
        group: "All",
        color: "#cf196f"
        },
        {
        group: "IT",
        color: "#3333FF"
        },
        {
        group: "Sales",
        color: "#ffc600"
        },
        {
        group: "Support",
        color: "green"
        },
      ];

        if (button_color === "rgba(0, 0, 0, 0)" ) {
          all_buttons_li.forEach(button => {
              button.style.backgroundColor = "rgba(0, 0, 0, 0)";
        })

        filters.forEach((filter) => {
          if (filter.group === button_name) {
            e.target.style.backgroundColor = filter.color;
            button_top.style.backgroundColor = filter.color;
            this.props.changeButtonTitle(button_name)
          }
        });
      }

    }

  render () {
    return (
      <div className="color-buttons">
          <div className="color-buttons__top--selected"></div>
          <ul>
            <li onClick={this.colorButton}>All</li>
            <li onClick={this.colorButton}>IT</li>
            <li onClick={this.colorButton}>Sales</li>
            <li onClick={this.colorButton}>Support</li>
          </ul>
      </div>
    )
  }
}

export default Nav;
