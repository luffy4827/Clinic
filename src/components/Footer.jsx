import React from "react";
import { Link } from "react-router-dom";
import footer from "../assets/Logo.png";

const Footer = () => {
  const phoneNumber = "+9779862781599";
  const message = "Hello, I have some queries that i want to talk.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center gap-5 p-10 bg-gray-100 text-gray-700">
      <div className="order-1">
        <h6 className="footer-title">Hours</h6>
        <p class="mt-1 text-gray-600">Sunday - Friday: 7:00AM — 7:00PM</p>
        <p class="mt-1 text-gray-600">Saturday: 7:00AM to 10:00AM</p>
      </div>
      <nav className="order-3 lg:order-2">
        <h6 className="footer-title">Social Links</h6>
        <nav>
          <div className="grid grid-flow-col gap-5">
            <Link to="mailto:sunapatipolyclinic@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 0v2l10 6 10-6V4H2zm20 3.197L12.485 13 2 7.197V20h20V7.197z"></path>
              </svg>
            </Link>
            <Link to={whatsappURL} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12.001 0C5.373 0 0 5.373 0 12c0 2.141.566 4.152 1.546 5.919L0 24l6.207-1.523C8.026 23.435 9.975 24 12.001 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22.016c-2.017 0-3.898-.578-5.496-1.572l-.39-.241-3.644.897.936-3.549-.253-.407C2.545 15.905 1.998 14.011 1.998 12c0-5.52 4.484-9.999 10.002-9.999 5.519 0 10.001 4.479 10.001 9.999s-4.483 10.016-10.001 10.016zm4.895-7.215c-.743-.371-1.722-.773-2.107-.887-.386-.113-.667-.171-.947.285-.278.455-.945.888-1.233 1.073-.287.187-.528.278-.953-.056-.426-.333-1.774-1.616-2.113-2.19-.278-.444-.001-.683.209-.895.215-.215.382-.486.576-.73.193-.246.258-.411.388-.685.133-.275.068-.51-.038-.729-.104-.218-.926-2.308-1.268-3.17-.333-.861-.67-.744-.953-.758-.245-.01-.527-.012-.809-.012-.278 0-.729.104-1.109.505-.379.4-1.447 1.412-1.447 3.447 0 2.035 1.482 4.003 1.687 4.279.206.275 2.899 4.411 7.054 5.785.987.327 1.758.52 2.358.666.993.241 1.897.207 2.61.126.795-.093 2.443-.995 2.79-1.955.344-.957.344-1.78.241-1.955-.101-.175-.371-.279-.77-.48z" />
              </svg>
            </Link>
            <Link to="https://bit.ly/3RJCFDh" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </nav>
      <div className="order-2 lg:order-3">
        <aside className="flex flex-col justify-center items-center">
          <img src={footer} className="w-20 h-20 bg-sky-500 rounded-full" alt="" />
          <p className="font-bold text-center">
            Sunapati Polyclinic & Health Center Pvt Ltd. <br />
            Balkumari, Lalitpur, Nepal <br /> Harit Colony way <br />
            01-5201929, 9862781599
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
