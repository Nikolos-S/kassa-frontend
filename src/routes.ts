  type Routes = {
    layout: () => string,
    login: () => string,
    sale: () => string,
    refund: () => string,
    arm: () => string,
    reports: () => string,
  }
  const routes: Routes = {
    layout: () => '/',
    sale: () => '/sale',
    refund: () => '/refund',
    arm: () => '/arm',
    reports: () => '/reports',
    login: () => '/login',
  };
  
  export default routes;