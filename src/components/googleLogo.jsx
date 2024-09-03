import React from 'react';

function GoogleLogo() {
  const logoStyle = {
    display: 'block',
    WebkitUserSelect: 'none',
    maxWidth: '100%',
  };

  return (
      <img
        style={logoStyle}
        className='rounded-lg bg-transparent'
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
        alt="Google Logo"
      />
  );
}

export default GoogleLogo;
