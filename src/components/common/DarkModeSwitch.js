import React, { Fragment } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Light from "../../images/svg/light.inline.svg";
import Dark from "../../images/svg/dark.inline.svg";

class DarkModeSwitch extends React.Component {

  render() {
    return (
      <ThemeToggler> 
        {({ theme, toggleTheme }) => {
          
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        console.log('render.theme',theme);

        return (
            <Fragment>
              {theme === 'light' && <Light
                onClick={() => {
                  toggleTheme(nextTheme)
                  }}
                />
              }
              {theme === 'dark' && <Dark
                onClick={() => {
                   toggleTheme(nextTheme)
                  }}
                />
                }
                {console.log('last theme',theme)}
            </Fragment>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default DarkModeSwitch