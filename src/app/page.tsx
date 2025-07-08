import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/Ourovance.png"
          alt="Ourovance logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          The future of health is coming
        </h1>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-center">
        <a
          href="mailto:info@ourovance.com"
          className="hover:underline hover:underline-offset-4"
        >
          info@ourovance.com
        </a>
      </footer>
    </div>
  );
}
