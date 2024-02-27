import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Blog = () => {
  return (
    <div className="flex justify-center py-44">
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#d61ed9",
          fontWeight: 700,
          fontSize: "2em",
        }}
        startDelay={500}
        cursorColor="#3F3D56"
        multiText={[
          "Coming soon!",
          "Coming soon!",
          "Coming soon!",
          "Coming soon!",
        ]}
        multiTextDelay={2000}
        typeSpeed={50}
      />
    </div>
  );
};

export default Blog;
