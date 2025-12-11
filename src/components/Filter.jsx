function Filter({ fiterData }) {
  return (
    <div>
      {fiterData.map((e) => {
        return <button key={e.id}>{e.title}</button>;
      })}
    </div>
  );
}

export default Filter;
