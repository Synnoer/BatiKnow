import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        This is correct and should work because a div is really good for this
        task.
      </div>
      <Image src="/vercel.svg" alt="" width="30" height="30" />
    </div>
  );
}
