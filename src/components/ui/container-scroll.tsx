"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1.0] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[16rem] md:h-[20rem] flex items-center justify-center relative p-2 md:p-4 w-full overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-2 md:py-4 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="w-full text-center"
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="w-full -mt-12"
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <div className="w-full h-full overflow-hidden rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
