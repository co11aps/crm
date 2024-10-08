import StatusLabel, { Status } from './components/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive} disabled>
        Not Active
      </StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended} disabled>
        Suspended
      </StatusLabel>
    </main>
  );
}
