import React, { useEffect, useState } from "react";

export const Time = ({ timer, setTimer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Remaining Time- {Math.floor(timer / 60)} Minutes {Math.ceil(timer % 60)}
      seconds
    </div>
  );
};
