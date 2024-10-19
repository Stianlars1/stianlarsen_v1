import { ErrorBoundary } from "react-error-boundary";

import { HeaderH1Title } from "./components/h1";
import { ScrollDownIcon } from "./components/scrollDownIcon/scrollDownIcon";
import "./header.css";

export const Header = () => {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong with the Header</p>}>
        <section className="main-header">
          <div className="main-header__wrapper">
            <h1 className="main-header__wrapper__h1 animate-fadeInUp-1000">
              <HeaderH1Title />
            </h1>
          </div>
          <ScrollDownIcon />
        </section>
      </ErrorBoundary>
    </>
  );
};
