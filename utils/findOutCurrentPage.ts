import { AboutNavigations, AboutNavigationsSlugs } from "@/@types/enums";

export default  function findOutCurrentPage(path?: string): {
    array: { title: AboutNavigations }[];
    active: AboutNavigations;
} {
    if (!path) {
        return {
          array: [{ title: AboutNavigations.ADDRESSES }],
          active: AboutNavigations.ADDRESSES,
        };
      }
    
      switch (path) {
        case AboutNavigationsSlugs.ADDRESSES:
          return {
            array: [{ title: AboutNavigations.ADDRESSES }],
            active: AboutNavigations.ADDRESSES,
          };
        case AboutNavigationsSlugs.STAFF:
          return {
            array: [{ title: AboutNavigations.STAFF }],
            active: AboutNavigations.STAFF,
          };
        case AboutNavigationsSlugs.SHOPS:
          return {
            array: [{ title: AboutNavigations.SHOPS }],
            active: AboutNavigations.SHOPS,
          };
        case AboutNavigationsSlugs.LICENSE:
          return {
            array: [{ title: AboutNavigations.LICENSE }],
            active: AboutNavigations.LICENSE,
          };
        case AboutNavigationsSlugs.REQUISITES:
          return {
            array: [{ title: AboutNavigations.REQUISITES }],
            active: AboutNavigations.REQUISITES,
          };
        default:
          return {
            array: [{ title: AboutNavigations.ADDRESSES }],
            active: AboutNavigations.ADDRESSES,
          };
      }
}
