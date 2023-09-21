import { Fragment } from "react";
import Faq from "react-faq-component";
import FAQ_data from "./FAQ_data";

export default function App() {
  return (
    <div className="faq">
      <Fragment>
        <Faq
          data={FAQ_data}
          styles={{
            bgColor: "white",
            titleTextColor: "#48482a",
            rowTitleColor: "#78789a",
            rowTitleTextSize: "large",
            rowContentColor: "#48484a",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "10%",
            rowContentPaddingRight: "20%",
            arrowColor: "red",
          }}
          config={{
            animate: true,
          }}
        />
      </Fragment>
    </div>
  );
}
