export async function getServerSideProps() {
  const req = await fetch("http://localhost:8080/api/time");
  const { time } = await req.json();

  return {
    props: {
      time,
      server: new Date().toTimeString(),
    },
  };
}
export default function DynamicPage({
  time,
  server,
}: {
  time: string;
  server: string;
}) {
  return (
    <main className="flex flex-col gap-5">
      <div className="font-bold">Pages - Dynamic Page</div>
      <div>Server Time: {server}</div>
      <div>API Time: {time}</div>
    </main>
  );
}
