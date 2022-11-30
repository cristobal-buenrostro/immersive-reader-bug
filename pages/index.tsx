import dynamic from "next/dynamic";

const ImmersiveReader = dynamic(
    () => {
      return import("./immersive-reader");
    },
    { ssr: false }
  );

export default function Home() {
    return (
        <div>
            <ImmersiveReader />
        </div>
    )
}
