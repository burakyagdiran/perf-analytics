import React from 'react';

const withLayout = (Component) => {
  return (props) => {
    const { children } = props;
    const { pathname } = window.location;
    const currentRoute = React.Children.toArray(children).find(
      (route) => route.props.path === pathname
    );
    let layoutProps = {};
    if (currentRoute) {
      layoutProps = currentRoute.props.layoutProps;
    }
    return <Component {...props} {...layoutProps} />;
  };
};

export default withLayout;