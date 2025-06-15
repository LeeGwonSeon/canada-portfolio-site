const destinations = [
  { id: 1, name: 'Vancouver', image: '/images/vancouver.jpg', description: 'Nature meets modern life' },
  { id: 2, name: 'Toronto', image: '/images/toronto.jpg', description: 'Culture and finance' },
  { id: 3, name: 'Quebec City', image: '/images/quebec.jpg', description: 'French charm and history' }
];

function DestinationList() {
  return (
    <div className="cards">
      {destinations.map(dest =>(
        <article key={dest.id}>
          <img src={dest.image} alt={dest.name} />
          <h3>{dest.name}</h3>
          <p>{dest.description}</p>
        </article>
      ))}
    </div>
  )
}

export default DestinationList;