  type Routes = {
    layout: () => string,
    login: () => string,
    sale: () => string,
    refund: () => string,
    arm: () => string,
    reports: () => string,
    oauth: () => string,
    auth: () => string,
    open: () => string,
    close: () => string,
  }
  const routes: Routes = {
    layout: () => '/',
    sale: () => '/sale',
    refund: () => '/refund',
    arm: () => '/arm',
    reports: () => '/reports',
    login: () => '/login',
    oauth: () => '/oauth2/success',
    auth: () => '/api/me',
    open: () => '/api/cashier/sale/v2/session/open',
    close: () => '/api/cashier/sale/v2/session/close',

  };
  
  export default routes;