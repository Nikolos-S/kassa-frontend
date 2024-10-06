  type Routes = {
    layout: () => string,
    login: () => string,
    sale: () => string,
    refund: () => string,
    arm: () => string,
    reports: () => string,
    oauth: () => string,
  }
  const routes: Routes = {
    layout: () => '/',
    sale: () => '/sale',
    refund: () => '/refund',
    arm: () => '/arm',
    reports: () => '/reports',
    login: () => '/login',
    oauth: () => '/oauth2/success',
  };
  
  export default routes;