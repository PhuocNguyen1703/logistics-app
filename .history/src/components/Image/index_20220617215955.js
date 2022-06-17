import React, { useState, forwardRef } from 'react';
import avatar from '~/assets/images';

function Image({ src, alt, ...props }, ref) {
  const [fall]
    return <img ref={ref} src={src} {...props} alt={alt} />;
}

export default forwardRef(Image);
