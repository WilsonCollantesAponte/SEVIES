import styles from "./background.module.css";

function Background() {
  return (
    <div className="flex max-md:flex-wrap-reverse absolute overflow-hidden inset-0 blur-[15vw] max-md:blur-[35vw] -z-10 opacity-45">
      <div
        className={`${styles["bg-shape1"]} w-[30vw] h-[70vh] relative bg-[#1f6dff]`}
      />
      <div
        className={`${styles["bg-shape3"]} w-[30vw] h-[70vh] relative bg-[#d9ff00]`}
      />
      <div
        className={`${styles["bg-shape4"]} w-[30vw] h-[70vh] relative bg-[#ff0000]`}
      />
      <div
        className={`${styles["bg-shape3"]} w-[30vw] h-[70vh] relative bg-[#5cff25]`}
      />
      <div
        className={`${styles["bg-shape3"]} w-[30vw] h-[70vh] relative bg-[#5cff25]`}
      />
      <div
        className={`${styles["bg-shape4"]} w-[30vw] h-[70vh] relative bg-[#df2bff]`}
      />
      <div
        className={`${styles["bg-shape2"]} w-[30vw] h-[70vh] relative bg-[#25c8ff]`}
      />
    </div>
  );
}

export default Background;
