import React from "react";
import "./Autoscroll.css";

function ApplicationContainer() {
  const logos = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://content-management-files.canva.com/7116f431-c121-4055-abf1-50866cf6c920/skyscanner-light-theme.png",
    "https://content-management-files.canva.com/532da61c-6de8-4428-ac69-3fae7926b7dd/salesforce-light-theme.png",
    "https://content-management-files.canva.com/057168c7-ab29-4454-b06a-31ed1f161105/sony-light-theme.png",
    "https://content-management-files.canva.com/ad90400c-500e-4b63-8d25-6c155cfc2ecf/hubspot-light-theme.png",
  ];

  return (
    <div className="app-container">
      <div className="wrapper">
        <div className="text-autoscroll"></div>
        <div className="note"></div>
        <div className="marquee">
          <div className="marquee-group">
            {logos.map((logo, index) => (
              <div className="image-group" key={index}>
                <img className="image-auto" src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {logos.map((logo, index) => (
              <div className="image-group" key={`duplicate-${index}`}>
                <img className="image-auto" src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {logos.map((logo, index) => (
              <div className="image-group" key={`triplicate-${index}`}>
                <img className="image-auto" src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationContainer;
