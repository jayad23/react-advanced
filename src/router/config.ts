import { LazyExoticComponent, lazy } from "react";
import {routesMap} from "./routing";

const dynamicImporting = (param: string): LazyExoticComponent<() => JSX.Element> => {
  return lazy(() => import(`@pages/${param.toLowerCase()}/page.tsx`));
};

export const pagesCollection: Array<pagesCollectionProps> = routesMap.map(
  (comp: {[key: string]: string }, idx: number) => ({ 
    id: idx, 
    route: comp.route, 
    Component: dynamicImporting(comp.name)}
  )
);

export interface pagesCollectionProps { 
  id: number;
  route: string;
  Component: LazyExoticComponent<() => JSX.Element> ;
}