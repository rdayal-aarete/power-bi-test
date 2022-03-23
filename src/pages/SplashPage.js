import "../App.css";

import Lottie from "react-lottie";
import animationData from "../lottie/line-loader";
import tagLine from "../assets/Tagline.svg";

import "./style.css";

function SplashPage() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div class="h-screen bg-background-blue flex flex-col items-center justify-center">
      <div className="flex flex-col items-center animate-logoSlideUp fixed mb-44">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo">
            <g id="upperObject" className="animate-slideInleft">
              <path
                id="upper1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.1773 47.1086H59.9697H80.7622C87.0784 35.3383 78.679 21 65.4679 21H34.2253C33.5486 21 33 21.5565 33 22.2429V40.8425V47.1086H39.1773ZM39.1773 27.2661V40.8425H76.5102C77.8274 34.1 72.7943 27.2661 65.4679 27.2661H39.1773Z"
                className="fill-dark-blue"
              />
            </g>
            <g id="lowerObject">
              <path
                id="lower1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.1772 57.2661H79.35C82.2252 64.6474 76.8897 72.9312 68.7968 72.9312H39.1772V57.2661ZM39.1772 51H83.1504L84.2663 53.1391C90.435 64.9631 81.9848 79.1973 68.7968 79.1973H35.0591C33.9219 79.1973 33 78.2622 33 77.1086V57.2661V51H39.1772Z"
                className="fill-dark-blue "
              />
            </g>
          </g>
        </svg>
        <div className="animate-loadingLine">
          <Lottie
            options={defaultOptions}
            height={70}
            width={300}
            speed="1.5"
          />
        </div>
        <svg
          width="177"
          height="43"
          viewBox="0 0 177 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-logoNameSlideBottom opacity-0 "
        >
          <path
            id="BLOKZ"
            d="M2.814 33.4834H18.438C24.15 33.4834 28.224 30.2914 28.224 25.6714C28.224 22.5214 26.25 19.7914 22.932 18.3214C25.452 17.0614 26.922 14.7514 26.922 11.8954C26.922 7.6954 23.226 4.6294 17.892 4.6294H2.814V33.4834ZM9.954 16.0534V10.7194H16.128C18.102 10.7194 19.53 11.8114 19.53 13.3654C19.53 14.9194 18.102 16.0534 16.128 16.0534H9.954ZM9.954 27.3934V21.5974H17.22C19.32 21.5974 20.832 22.8154 20.832 24.4954C20.832 26.1754 19.32 27.3934 17.22 27.3934H9.954ZM46.9173 27.0574V4.6294H39.7773V33.4834H60.8193V27.0574H46.9173ZM86.5597 33.9874C95.0017 33.9874 102.1 27.1414 102.1 19.0354C102.1 10.9294 95.0017 4.1254 86.5597 4.1254C78.1597 4.1254 71.0617 10.9294 71.0617 19.0354C71.0617 27.1414 78.1597 33.9874 86.5597 33.9874ZM86.5597 27.4774C82.1497 27.4774 78.4117 23.6134 78.4117 19.0354C78.4117 14.4994 82.1497 10.6354 86.5597 10.6354C90.9697 10.6354 94.7077 14.4994 94.7077 19.0354C94.7077 23.6134 90.9697 27.4774 86.5597 27.4774ZM113.964 33.4834H121.146V25.6294L124.464 22.0594L132.57 33.4834H141.222L129.42 16.8934L140.382 4.6294H131.856L121.146 16.9354V4.6294H113.964V33.4834ZM150.5 33.4834H174.944V27.0574H160.37L174.734 10.0054V4.6294H150.794V11.0554H164.906L150.5 28.1074V33.4834Z"
            className="fill-dark-blue "
          />
        </svg>
      </div>
      <div className="h-1/2" />
      <div className="flex flex-col items-center animate-taglineSlideUp opacity-0">
        <button className="bg-btn-light w-14 h-14 bg-red-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-dark-blue inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <img alt="" src={tagLine} className="mt-8" />
      </div>
    </div>
  );
}

export default SplashPage;
