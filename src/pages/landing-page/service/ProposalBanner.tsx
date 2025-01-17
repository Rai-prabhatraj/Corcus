import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const ProposalBanner = ({ ...props }: Props) => {
  // Styles for the diagonal strips
  const stripContainerStyle: React.CSSProperties = {
    position: "relative",
    height: "10rem",
    overflow: "hidden",
  };

  const stripStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    width: "150%",
    height: "4rem",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(-10deg)",
    transformOrigin: "center",
    animation: "slide 10s linear infinite",
    whiteSpace: "nowrap",
  };

  const stripBackgroundStyle: React.CSSProperties = {
    ...stripStyle,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "#d3d3d3",
    top: "10%", // Adjust for overlapping effect
    transform: "rotate(10deg)",
    animation: "slideReverse 10s linear infinite", // Reverse animation for criss-cross
  };

  // Keyframe animations for the criss-cross effect
  const keyframesStyle = `
    @keyframes slide {
      0% { transform: translateX(100%) rotate(-10deg); }
      100% { transform: translateX(-100%) rotate(-10deg); }
    }
    @keyframes slideReverse {
      0% { transform: translateX(-100%) rotate(10deg); }
      100% { transform: translateX(100%) rotate(10deg); }
    }
  `;

  return (
    <section style={stripContainerStyle} {...props}>
      {/* Add keyframes style dynamically */}
      <style>{keyframesStyle}</style>

      {/* Diagonal Background Strip */}
      <div style={stripBackgroundStyle}>
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} style={{ padding: "0 3rem" }}>
            Reach Us
          </span>
        ))}
      </div>

      {/* Main Diagonal Strip */}
      <div style={stripStyle}>
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} style={{ padding: "0 3rem" }}>
            Reach Us
          </span>
        ))}
      </div>
    </section>
  );
};
