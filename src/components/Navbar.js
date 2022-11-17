import React from "react";

// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function IndexNavbar({t, i18n}) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  function changeLanguage(language) {
    toggleNavbarCollapse()
    i18n.changeLanguage(language);
	}

  let languages = [
    {
      "name": "Español",
      "iso": "es",
      "icon": "fa-pepper-hot"
    },
    {
      "name": "Português",
      "iso": "pt",
      "icon": "fa-futbol"
    },
    {
      "name": "English",
      "iso": "en",
      "icon": "fa-burger"
    }
  ]
  

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("navbar-transparent");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          />
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                nav
                onClick={(e) => e.preventDefault()}
                role="button"
              >
                <i
                  aria-hidden={true}
                  className="fa-solid fa-earth-americas"
                  style={{fontSize: "1.7em"}}
                />
                <p className="d-lg-none">{t('chLanguage')}</p>
              </DropdownToggle>
              <DropdownMenu end>
                {languages.filter(item => item.iso !== t('language')).map((item,index) => (
                  <DropdownItem key={index} onClick={() => changeLanguage(item.iso)}>
                    <i className={`fa-solid ${item.icon}`}></i>
                    {item.name}
                  </DropdownItem>
                ))} 
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
