export default async function StaticPage() {
  const req = await fetch("http://localhost:8080/api/time");
  const { time } = await req.json();

  const server = new Date().toTimeString();

  return (
    <main className="flex flex-col gap-5">
      <div className="font-bold">App Router - Static Page</div>
      <div>Server Time: {server}</div>
      <div>API Time: {time}</div>
    </main>
  );
}
