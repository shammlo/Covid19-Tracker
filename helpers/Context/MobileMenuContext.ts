//* ********* IMPORTS **********/
import React from 'react';
//* ***********************************
interface MobileMenuContextValue {}
const MobileMenuContext = React.createContext<MobileMenuContextValue | any>(() => {});

export default MobileMenuContext;
