import React from 'react';

const GradientText = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithRef<'h1'>
>(({ className, children, ...rest }, ref) => {
  return (
    <h1
      className={`${className} bg-gradient-to-r bg-clip-text font-comfortaa text-8xl font-extrabold text-transparent `}
    >
      {children}
    </h1>
  );
});

export default GradientText;
