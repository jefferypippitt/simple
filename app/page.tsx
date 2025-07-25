import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-8 pb-20 sm:p-20">
      <main className="flex flex-col md:flex-row gap-4 md:gap-12 items-center max-w-4xl w-full">
        <div>
          <Image
            className="dark:invert"
            src="/Leonardo_da_Vinci.png"
            alt="Leonardo da Vinci"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <div className="ml-20 md:ml-30 tracking-tight">simplicity</div>
            <div className="tracking-tight">is the ultimate</div>
            <div className="tracking-tight">sophistication</div>
          </h1>
        </div>
      </main>
    </div>
  );
}
