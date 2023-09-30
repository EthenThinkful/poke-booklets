import React, { useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { usePreview } from 'react-dnd-preview';
function DraggablePictureTwo({ src, id, className }) {
  const preview = usePreview()
  const { itemType, item, style, ref } = preview;

  // for retaining draggable images src & id properties while dragging
  const idRef = useRef(null);

  useEffect(() => {
    idRef.current = id;
  }, [id])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: ({ id: idRef }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowLimitSm = 992;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={windowWidth < 992 && isDragging ? style : null}>
      <img
        ref={drag}
        src={src}
        className={isDragging ? "card rounded-lg shadow-lg" : "card zoom rounded-lg shadow-lg"}
      // style={isDragging ? style : null}
      />
    </div>
  );
}

export default DraggablePictureTwo;